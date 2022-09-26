const { compare } = require("odiff-bin");
const path = require("path");

async function main() {
  const res = await compare(
    path.resolve(__dirname, "a.jpg"),
    path.resolve(__dirname, "b.jpg"),
    path.resolve(__dirname, "c.png")
  );

  console.log(res);
}

main().catch(console.error);
