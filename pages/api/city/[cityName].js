
export default async (req, res) => {
  const data = await fetch('https://cinepolis.com/Cartelera.aspx/GetNowPlayingByCity', {
      method: 'POST',
      headers: {
          'accept': 'application/json, text/plain, */*',
          'accept-language': 'es-ES,es;q=0.9',
          'content-type': 'application/json;charset=UTF-8',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin'
      },
      body: JSON.stringify({
          'claveCiudad': req.query.cityName,
          'esVIP': false
      })
  })

  const json = await data.json()
  res.statusCode = 200
  res.json(json)
}