export function jsonToTOON(jsonString: string): string {
  try {
    const data = JSON.parse(jsonString)
    return encodeToTOON(data, 0)
  } catch (error) {
    throw new Error('Invalid JSON format. Please check your input.')
  }
}

function encodeToTOON(data: any, indent: number = 0): string {
  const indentStr = '  '.repeat(indent)
  
  if (data === null) {
    return 'null'
  }
  
  if (data === undefined) {
    return 'undefined'
  }
  
  if (typeof data === 'boolean') {
    return data.toString()
  }
  
  if (typeof data === 'number') {
    return data.toString()
  }
  
  if (typeof data === 'string') {
    return needsQuotes(data) ? JSON.stringify(data) : data
  }
  
  if (Array.isArray(data)) {
    if (data.length === 0) {
      return '[]'
    }
    
    if (isUniformArrayOfObjects(data)) {
      return encodeArrayOfObjects(data, indent)
    }
    
    if (isPrimitiveArray(data)) {
      const values = data.map(item => formatValue(item)).join(', ')
      return `[${data.length}]: ${values}`
    }
    
    const items = data.map(item => encodeToTOON(item, indent + 1))
    return '[\n' + items.map(item => indentStr + '  ' + item).join(',\n') + '\n' + indentStr + ']'
  }
  
  if (typeof data === 'object') {
    const entries = Object.entries(data)
    if (entries.length === 0) {
      return '{}'
    }
    
    const lines: string[] = []
    for (const [key, value] of entries) {
      const encodedValue = encodeToTOON(value, indent + 1)
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value) && Object.keys(value).length > 0) {
        lines.push(`${indentStr}${key}:`)
        const nestedLines = encodedValue.split('\n')
        lines.push(...nestedLines.map(line => '  ' + line))
      } else if (Array.isArray(value) && value.length > 0 && isUniformArrayOfObjects(value)) {
        lines.push(`${indentStr}${key}${encodedValue}`)
      } else {
        lines.push(`${indentStr}${key}: ${encodedValue}`)
      }
    }
    return lines.join('\n')
  }
  
  return String(data)
}

function encodeArrayOfObjects(arr: any[], indent: number = 0): string {
  if (arr.length === 0) return '[]'
  
  const indentStr = '  '.repeat(indent)
  const keys = Object.keys(arr[0])
  const keysStr = keys.join(',')
  
  const header = `[${arr.length}]{${keysStr}}:`
  
  const rows = arr.map(obj => {
    return keys.map(key => formatValue(obj[key])).join(',')
  })
  
  return header + '\n' + rows.map(row => indentStr + '  ' + row).join('\n')
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

function isPrimitiveArray(arr: any[]): boolean {
  return arr.every(item => 
    typeof item === 'string' || 
    typeof item === 'number' || 
    typeof item === 'boolean' || 
    item === null
  )
}

function formatValue(value: any): string {
  if (value === null) return 'null'
  if (value === undefined) return 'undefined'
  if (typeof value === 'boolean') return value.toString()
  if (typeof value === 'number') return value.toString()
  if (typeof value === 'string') return needsQuotes(value) ? JSON.stringify(value) : value
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

function needsQuotes(str: string): boolean {
  if (str.length === 0) return true
  if (str.startsWith(' ') || str.endsWith(' ')) return true
  if (str.includes(',') || str.includes(':') || str.includes('\n')) return true
  if (str.includes('"') || str.includes("'")) return true
  if (str === 'null' || str === 'true' || str === 'false') return true
  if (!isNaN(Number(str))) return true
  return false
}

export function toonToJSON(toonString: string): string {
  try {
    const data = decodeFromTOON(toonString)
    return JSON.stringify(data, null, 2)
  } catch (error) {
    throw new Error('Invalid TOON format. Cannot convert to JSON.')
  }
}

function decodeFromTOON(toonString: string): any {
  const lines = toonString.trim().split('\n')
  
  if (lines.length === 1) {
    const line = lines[0].trim()
    if (line === 'null') return null
    if (line === 'true') return true
    if (line === 'false') return false
    if (line === '{}') return {}
    if (line === '[]') return []
    if (!isNaN(Number(line))) return Number(line)
    return line
  }
  
  return parseObject(toonString)
}

function parseObject(content: string): any {
  const lines = content.trim().split('\n')
  const result: any = {}
  
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()
    
    if (!trimmed || trimmed.startsWith('#')) {
      i++
      continue
    }
    
    const colonIndex = trimmed.indexOf(':')
    if (colonIndex === -1) {
      i++
      continue
    }
    
    const key = trimmed.substring(0, colonIndex).trim()
    const afterColon = trimmed.substring(colonIndex + 1).trim()
    
    if (afterColon) {
      result[key] = parseValue(afterColon)
      i++
    } else {
      const childLines: string[] = []
      i++
      const baseIndent = line.search(/\S/)
      
      while (i < lines.length && (lines[i].search(/\S/) > baseIndent || !lines[i].trim())) {
        if (lines[i].trim()) {
          childLines.push(lines[i].substring(baseIndent + 2))
        }
        i++
      }
      
      if (childLines.length > 0) {
        result[key] = parseObject(childLines.join('\n'))
      }
    }
  }
  
  return result
}

function parseValue(value: string): any {
  value = value.trim()
  
  if (value === 'null') return null
  if (value === 'true') return true
  if (value === 'false') return false
  if (value === '{}') return {}
  if (value === '[]') return []
  
  if (value.startsWith('"') && value.endsWith('"')) {
    return JSON.parse(value)
  }
  
  if (!isNaN(Number(value))) {
    return Number(value)
  }
  
  return value
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
