import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="hero">
      <h1 className="title">Welcome to Next!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
    </div>

    <Button>Test</Button>
  </div>
);

export default Home;
