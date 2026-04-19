const supabase = require("./db");

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data: user } = await supabase
    .from("usuarios")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

  if (!user) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  const token = jwt.sign({
    userId: user.id,
    empresaId: user.empresa_id,
    rol: user.rol
  }, SECRET);

  res.json({ token });
});