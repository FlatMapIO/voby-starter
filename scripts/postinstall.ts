import { existsSync, rmSync } from "node:fs";

function removeVobyTsConfig() {
  const files = [
    "node_module/voby/tsconfig.json",
    "node_module/oby/tsconfig.json",
  ];
  files.forEach((file) => {
    if (existsSync(file)) {
      rmSync(file);
    }
  });
}

removeVobyTsConfig();
