module.exports = {
  dialect: "postgres",
  host: "161.35.125.187",
  username: "postgres",
  password: "root",
  database: "guilherme-default",
  define: {
    timestamps: true,
    undescored: true,
    undescoredAll: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};
