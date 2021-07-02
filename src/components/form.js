/** @jsx jsx */
import { jsx, Box, Label, Input, Button } from "theme-ui"

export default function Form() {
  const handleSubmit = e => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <Box sx={{ maxWidth: 640 }} as="form" onSubmit={handleSubmit}>
      <Label htmlFor="name">Seudónimo</Label>
      <Input name="name" id="name" mb={3} />
      <Label htmlFor="url">Enlace a la obra</Label>
      <Input type="url" name="url" id="url" mb={3} />
      <Label htmlFor="email">Correo electrónico</Label>
      <Input type="email" name="email" id="email" mb={3} />
      <Button>Enviar</Button>
    </Box>
  )
}
