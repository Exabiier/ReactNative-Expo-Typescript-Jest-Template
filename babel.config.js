module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel",
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          // This needs to be mirrored in tsconfig.json
          "@/": "./src/",
          "@/screens": "./src/screens",
          "@/components": "./src/components",
          "@/navigation": "./src/navigation"
        },
      },
    ],
  ],
  };
};
