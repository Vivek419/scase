import React, { useState, useEffect } from 'react';
import styled from 'styled-components'


const Button = styled.button`
  background: #9B9897;
  border: 2px solid #9B9897;
  height:30px;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;`

export default function InputText(props) {
  const [get, set] = useState();




  const handleChange = (e) => {
    console.log(e.target.value)
    var result = (e.target.value)
    set(result)
    console.log(get)


  };

  return (
    <>

      <div style={{ marginTop: "14%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <form>
          <tr>
            <td><p>Hi there! Welcome to your education showcase.</p></td>
          </tr>
          <br /><br /><br />
          <tr>
            <td><p>Type your name and click "Enter" below to begin!</p></td>
          </tr>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
            <form >
              <tr>
                <td><input type="text" placeholder="Your Name" style={{ height: "4ch" }} onChange={(e) => handleChange(e)} /></td>
              </tr>
              <br />
              <tr style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button onClick={() => { props.history.push("/main", { 'name': get }, alert(get)) }}>Enter</Button>

              </tr>
            </form>
          </div>
        </form>

      </div>

    </>

  );
}