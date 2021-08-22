let {users} = require('./data.js')

exports.getUsers = (req, res) => {
  const response = {
    "data": users,
  }
  res.statusCode = 200
  res.setHeader = ('Content-Type', 'Application/json')
  res.end(JSON.stringify(response))
}

exports.createUser = (req, res) => {
  // json to string -> 
  body = ''
  req.on('data', (chunk)=>{
    body += chunk
    console.log("ch"+chunk.toString())
  })

  req.on('end', () => {
    users.push(JSON.parse(body))
    const response = {
      "message": "User added successfully",
      "data": users
    }
    res.statusCode = 201
    res.setHeader = ('Content-Type', 'Application/json')
    res.end(JSON.stringify(response))
  })
}

exports.updateUser = (req, res) => {
  // json to string -> 
  body = ''
  console.log("here")
  req.on('data', (chunk)=>{
    body += chunk
    console.log("ch"+chunk.toString())
  })

  req.on('end', () => {
    console.log("updating")
    req_body = JSON.parse(body)
    req_id = req_body['id']
    user = users.filter((u)=>{if(u.id == req_id) {return u}})
    users[user.id] = req_body
    const response = {
      "message": "User added successfully",
      "data": users
    }
    res.statusCode = 201
    res.setHeader = ('Content-Type', 'Application/json')
    res.end(JSON.stringify(response))
  })
}