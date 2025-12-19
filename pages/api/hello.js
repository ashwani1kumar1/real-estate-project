// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Real Estate API',
    message: 'Hello from the Real Estate API!' 
  })
}
