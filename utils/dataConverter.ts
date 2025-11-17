export function compressJSON(jsonString: string): string {
  try {
    const data = JSON.parse(jsonString)
    const compressed = compressData(data)
    return JSON.stringify(compressed)
  } catch (error) {
    throw new Error('Invalid JSON format. Please check your input.')
  }
}

function compressData(data: any): any {
  if (data === null || data === undefined) {
    return data
  }
  
  if (Array.isArray(data)) {
    if (data.length === 0) return data
    
    if (isUniformArrayOfObjects(data)) {
      return compressArrayOfObjects(data)
    }
    
    return data.map(item => compressData(item))
  }
  
  if (typeof data === 'object') {
    const compressed: any = {}
    for (const [key, value] of Object.entries(data)) {
      compressed[key] = compressData(value)
    }
    return compressed
  }
  
  return data
}

function isUniformArrayOfObjects(arr: any[]): boolean {
  if (arr.length === 0) return false
  
  const first = arr[0]
  if (typeof first !== 'object' || first === null || Array.isArray(first)) {
    return false
  }
  
  const keys = Object.keys(first).sort()
  
  return arr.every(item => {
    if (typeof item !== 'object' || item === null || Array.isArray(item)) {
      return false
    }
    const itemKeys = Object.keys(item).sort()
    return JSON.stringify(keys) === JSON.stringify(itemKeys)
  })
}

function compressArrayOfObjects(arr: any[]): any {
  if (arr.length === 0) return arr
  
  const keys = Object.keys(arr[0])
  
  const compressed = {
    __DataCompressPro__: 'v1.uniformArray',
    __payload__: {
      keys: keys,
      values: arr.map(obj => keys.map(key => obj[key]))
    }
  }
  
  return compressed
}

export function decompressJSON(compressedString: string): string {
  try {
    const data = JSON.parse(compressedString)
    const decompressed = decompressData(data)
    return JSON.stringify(decompressed, null, 2)
  } catch (error) {
    throw new Error('Invalid compressed format. Cannot decompress.')
  }
}

function decompressData(data: any): any {
  if (data === null || data === undefined) {
    return data
  }
  
  if (Array.isArray(data)) {
    return data.map(item => decompressData(item))
  }
  
  if (typeof data === 'object') {
    if (data.__DataCompressPro__ === 'v1.uniformArray' && data.__payload__) {
      const payload = data.__payload__
      if (payload.keys && payload.values && Array.isArray(payload.keys) && Array.isArray(payload.values)) {
        const keys = payload.keys
        return payload.values.map((values: any[]) => {
          const obj: any = {}
          keys.forEach((key: string, index: number) => {
            obj[key] = values[index]
          })
          return obj
        })
      }
    }
    
    const decompressed: any = {}
    for (const [key, value] of Object.entries(data)) {
      decompressed[key] = decompressData(value)
    }
    return decompressed
  }
  
  return data
}

export const sampleData = {
  simple: `{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com"
}`,
  arrayOfObjects: `{
  "users": [
    {"id": 1, "name": "Alice Smith", "role": "Developer", "active": true},
    {"id": 2, "name": "Bob Johnson", "role": "Designer", "active": true},
    {"id": 3, "name": "Carol Williams", "role": "Manager", "active": false}
  ]
}`,
  nested: `{
  "company": {
    "name": "Tech Corp",
    "employees": [
      {"id": 101, "name": "Alice", "department": "Engineering"},
      {"id": 102, "name": "Bob", "department": "Sales"}
    ],
    "founded": 2020
  }
}`
}
