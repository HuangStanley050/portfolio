import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Header from "../components/header";
import Skills from "../components/skills";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Jumbotron, Container } from "reactstrap";

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <Header />
    <Skills />
  </div>
);

export default Home;
