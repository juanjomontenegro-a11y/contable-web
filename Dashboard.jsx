app.get("/dashboard", auth, async (req, res) => {
  const empresaId = req.user.empresaId;

  const { data } = await supabase
    .from("contabilidad")
    .select("*")
    .eq("empresa_id", empresaId)
    .single();

  res.json(data);
});
}