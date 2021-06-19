var fs = require("fs");
var path = require("path");
var { build } = require("moduloze");

var outdir = path.join(__dirname, "..", "esm");
var outpath = path.join(outdir, "Erlang.mjs");
var srcpath = path.join(__dirname, "..", "Erlang.js");
var moduleContents = fs.readFileSync(srcpath, { encoding: "utf-8" });

var config = {
    buildESM: true,
    ignoreUnknownDependency: true,
};

var depMap = {
    ":::process": "NodeProcess",
    ":::zlib": "NodeZlib"
};

var { _, esm } = build(
    config,
    srcpath,
    moduleContents,
    depMap
);

fs.rmSync(outdir, {recursive: true, force: true});
fs.mkdirSync(outdir);
fs.writeFileSync(outpath, esm.code);
