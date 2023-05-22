import path from "path";

export default {
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      generateArtifacts: true,
      artifacts: {
        schema: path.join(
          __dirname,
          "..",
          "..",
          "graphql/graphql_schema.graphql"
        ),
        typegen: path.join(__dirname, "..", "..", "graphql/graphql_types.d.ts"),
      },
      apolloServer: {
        tracing: false,
      },
    },
  },
};
