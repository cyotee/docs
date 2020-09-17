(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{363:function(e,t,a){"use strict";a.r(t);var r=a(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("h2",{attrs:{id:"blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blocks"}},[e._v("#")]),e._v(" Blocks")]),e._v(" "),a("p",[e._v('The term "block" is used to refer to the pairing of a raw binary and a CID. In other words, it\'s\ndata that has not been decoded yet, or data that has just recently been encoded.')]),e._v(" "),a("p",[e._v("Most users don't work directly with blocks. Instead, block data is encoded/decoded into "),a("a",{attrs:{href:"#data-model"}},[e._v("Data Model")]),e._v(". It's only if your'e writing a database, or a filesystem, or a replicator that you will work directly\nwith blocks.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/block-layer/block.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Full Block specification."),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"cid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cid"}},[e._v("#")]),e._v(" CID")]),e._v(" "),a("p",[e._v("CID is a Content IDentifier. It's self-describing data structure identifier. In other\nwords, it's a hash that says what kind of hash it is and how to decode it.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/block-layer/CID.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IPLD CID Specification."),a("OutboundLink")],1),e._v(" The "),a("a",{attrs:{href:"https://github.com/multiformats/cid",target:"_blank",rel:"noopener noreferrer"}},[e._v("full format specification"),a("OutboundLink")],1),e._v(" is part of multi-formats.")]),e._v(" "),a("h2",{attrs:{id:"codecs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#codecs"}},[e._v("#")]),e._v(" Codecs")]),e._v(" "),a("p",[e._v('The term "codec" refers to a '),a("a",{attrs:{href:""}},[e._v("mutlicodec")]),e._v(" specific encoder/decoder.")]),e._v(" "),a("p",[e._v("A codec is responsible for encoding "),a("a",{attrs:{href:"#data-model"}},[e._v("Data Model")]),e._v(" to Binary and for\ndecoding Binary to "),a("a",{attrs:{href:"#data-model"}},[e._v("Data Model")]),e._v(".")]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#DAG-CBOR"}},[e._v("dag-cbor")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#DAG-JSON"}},[e._v("dag-json")])]),e._v(" "),a("li",[e._v("bitcoin")]),e._v(" "),a("li",[e._v("cbor")]),e._v(" "),a("li",[e._v("json")])]),e._v(" "),a("h3",{attrs:{id:"dag-cbor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dag-cbor"}},[e._v("#")]),e._v(" DAG-CBOR")]),e._v(" "),a("p",[e._v("IPLD Data Model implemented as a subset of CBOR with additional constraints\nfor hash consistent representations.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/block-layer/codecs/dag-cbor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Full DAG-CBOR specification."),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"dag-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dag-json"}},[e._v("#")]),e._v(" DAG-JSON")]),e._v(" "),a("p",[a("strong",[e._v("Not Recommended.")])]),e._v(" "),a("p",[e._v("IPLD Data Model implemented serialized to JSON.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/block-layer/codecs/dag-json.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Full DAG-JSON specification."),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-model"}},[e._v("#")]),e._v(" Data Model")]),e._v(" "),a("p",[e._v("The Data Model describes common base types called "),a("em",[e._v("kinds")]),e._v(".")]),e._v(" "),a("p",[e._v("These "),a("em",[e._v("kinds")]),e._v(" allow IPLD to create data structures using simple types\naccessible across many programming languages and encoding formats.")]),e._v(" "),a("p",[e._v("Using the Data Model we can implement file systems, databases, and custom\napplication data structures in a format agnostic way and even link between\nthese structures and formats using commong toolchains.")]),e._v(" "),a("p",[e._v("All JSON types are Data Model kinds:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("map")])]),e._v(" "),a("li",[a("code",[e._v("list")])]),e._v(" "),a("li",[a("code",[e._v("boolean")]),e._v(" (true, false)")]),e._v(" "),a("li",[a("code",[e._v("null")])]),e._v(" "),a("li",[a("code",[e._v("string")]),e._v(" (utf8)")]),e._v(" "),a("li",[a("code",[e._v("numbers")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("int")])]),e._v(" "),a("li",[a("code",[e._v("float")])])])])]),e._v(" "),a("p",[e._v("There is a "),a("code",[e._v("bytes")]),e._v(" kind for raw binary data.")]),e._v(" "),a("p",[e._v("Finally, there is a "),a("code",[e._v("link")]),e._v(" kind represented by a "),a("a",{attrs:{href:"#CID"}},[e._v("CID")]),e._v(". You'll find\nCID type implementations for every programming language which are leveraged\nby all IPLD codecs in that language.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/data-model-layer/data-model.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Full IPLD Data Model specification."),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"hamt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hamt"}},[e._v("#")]),e._v(" HAMT")]),e._v(" "),a("p",[e._v("HAMT stands for "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Hash_array_mapped_trie",target:"_blank",rel:"noopener noreferrer"}},[e._v('"Hash Array Mapped Trie"'),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v('HAMT\'s in IPLD differ from typical in-memory implementation as we require the use of "buckets"\nto manage performance.')]),e._v(" "),a("p",[a("a",{attrs:{href:"https://specs.ipld.io/data-structures/hashmap.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Full IPLD HAMT specification."),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);