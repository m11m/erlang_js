import {Erlang} from "erlang_js";

console.log(Erlang.term_to_binary("hi", (_, b) => console.log(b)));
