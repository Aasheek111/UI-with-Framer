import React from "react";
import Container from "./components/Container";

function page() {
  return (
    <div className="min-h-screen flex bg-neutral-100   ">
      <Container className=" w-full p-10 bg-neutral-50" >
        <h1 className=" text-primary">Hello There !</h1>
        <p className="text-secondary">
          I am a full stack sofware engineer and i love to build things
        </p>
      </Container>
    </div>
  );
}

export default page;
