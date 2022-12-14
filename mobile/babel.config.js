module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@/components": "./app/components",
            "@/screens": "./app/screens",
            "@/router": "./app/router",
            "@/contexts": "./app/contexts",
            "@/theme": "./app/theme",
            "@/firebase": "./app/firebase/index",
            "@/assets": "./assets",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  }
}
