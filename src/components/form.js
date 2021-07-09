/** @jsx jsx */
import { jsx, Themed, Box, Label, Input, Button, Spinner } from "theme-ui"
import { useState } from "react"
import { alpha } from "@theme-ui/color"

export default function Form() {
  const [values, setValues] = useState()
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: name === "email" ? window.btoa(value) : value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const { name, url, email } = values
      const response = await fetch("https://append-to-sheet.vercel.app/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values: Object.values({ name, url, email }) }),
      })
      const data = await response.json()
      console.log(data)
      setSent(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box
      as="form"
      sx={{
        variant: "forms.primary",
        position: "relative",
      }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <Label htmlFor="name">Seudónimo</Label>
      <Input type="text" name="name" id="name" required />
      <Label htmlFor="url">Enlace a la obra</Label>
      <Input type="url" name="url" id="url" required />
      <Label htmlFor="email">Correo electrónico</Label>
      <Input type="email" name="email" id="email" required />
      <Button>Enviar</Button>
      {loading && (
        <div
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            display: "flex",
            bg: alpha("background", 0.96),
          }}
        >
          {sent ? (
            <div sx={{ m: "auto" }}>
              <Themed.h4>
                Bien, <span sx={{ color: "primary" }}>{values.name}</span> 🥳
              </Themed.h4>
              <Themed.h4>Pronto estaremos en contacto.</Themed.h4>
            </div>
          ) : (
            <Spinner sx={{ m: "auto" }} />
          )}
        </div>
      )}
    </Box>
  )
}
