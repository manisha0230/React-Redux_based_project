import React, { useState } from "react";
import Home from "./Home";
function Header(props) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [active, setActive] = useState("");
  const [editname, setEditName] = useState("");
  const [editrole, setEditRole] = useState("");
  const [editlocation, setEditLocation] = useState("");
  const [editactive, setEditActive] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
let edit=(item,key)=>{
  document.getElementById("form").style.display="none";
  document.getElementById("editform").style.display="flex";
  console.log(props.data)
setEditName(" ")
setEditRole(" ")
setEditLocation(" ")
setEditActive(" ")
setEditName(item.cardData.EmployeeName)
setEditRole(item.cardData.Role)
setEditLocation( item.cardData.Location)
setEditActive(item.cardData.Active)
document.getElementById("editname").focus();

document.getElementById("editname").value = item.cardData.EmployeeName
document.getElementById("editrole").value = item.cardData.Role
document.getElementById("editlocation").value = item.cardData.Location
document.getElementById("editactive").value = item.cardData.Active
  props.editToCartHandler({
    key:key,
    data: item,
    EmployeeName:editname,
    Role: editrole,
    Location:editlocation,
    Active: editactive
  });
 
  
}
let addmore=()=>{
document.getElementById("form").style.display="flex";
document.getElementById("editform").style.display="none";
}

  let f = 0;
  var val = name;
  var RegEx = /^[a-z 0-9]+$/i;
  var Valid = RegEx.test(val);
  if (document.getElementById("button") != null) {
    document.getElementById("button").onclick = function () {
      document.getElementById("name").value = " "
      document.getElementById("role").value = " "
      document.getElementById("location").value = " "
      document.getElementById("active").value = " "
      setName(" ")
      setRole(" ")
      setLocation(" ")
      setActive(" ")
      if (Valid !== true) {
        alert("Enter proper name");
      } else if (role == "") {
        alert("Role cant be empty");
      } else {
        if (props.data.cardItems.length > 0) {
          for (let i = 0; i < props.data.cardItems.length; i++) {
            if (
              props.data.cardItems[i].cardData.EmployeeName === name &&
              props.data.cardItems[i].cardData.Role === role
            ) {
              alert("Duplicate Entry");
              f = 1;
            }
          }
          if (f == 0) {
            props.addToCartHandler({
              EmployeeName: name,
              Role: role,
              Location: location,
              Active: active
            });
          } else {
            f = 0;
          }
        } else {
          props.addToCartHandler({
            EmployeeName: name,
            Role: role,
            Location: location,
            Active: active
          });
        }
      }
    };
  }
  let createList = () => {
    if (props.data.cardItems.length > 0) {
      return (
        <div>
          <div className="heading">
          <h2>EMPLOYEE DETAILS</h2> 
          <button class="addmore" id="addmore"   onClick={() => { addmore();}}>
          ADD MORE DETAILS
        </button>
        </div>
          <table>
            <tr>
              <th>Serial Number</th>
              <th>EmployeeName</th>
              <th>Role</th>
              <th>Location</th>
              <th>Active</th>
              <th>Options</th>
            </tr>
            {props.data.cardItems.map((item, key) => {
              return (
                <tr>
                  <td>{key}</td>
                  <td>{item.cardData.EmployeeName}</td>
                  <td>{item.cardData.Role}</td>
                  <td>{item.cardData.Location}</td>
                  <td>{item.cardData.Active}</td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => {   props.removeToCartHandler({ key, data: item });}}
                    >
                      Delete
                    </button>
                    <button
                      className="edit"
                      onClick={() => {edit(item,key);}}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      );
    }
  };

  return (
    <div class="task">
      <form id="form" onSubmit={handleSubmit} class="form">
        <label>
          Employee Name:
          <input id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Role:
          <input id="role"
            type="text"
            onChange={(e) => setRole(e.target.value)}
          />
        </label>

        <label>
          Location:
          <input id="location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label>
          Active:
          <input id="active"
            type="text"
            onChange={(e) => setActive(e.target.value)}
          />
        </label>

        <button class="add" id="button">
          ADD
        </button>
      </form>
      <form  id="editform" className="editform">
      <label>
        Employee Name:
        <input id="editname"
          type="text"
          onChange={(e) => setEditName(e.target.value)}
        />
      </label>

      <label>
        Role:
        <input id="editrole"
          type="text"
          onChange={(e) => setEditRole(e.target.value)}
        />
      </label>

      <label>
        Location:
        <input id="editlocation"
          type="text"
          onChange={(e) => setEditLocation(e.target.value)}
        />
      </label>

      <label>
        Active:
        <input id="editactive"
          type="text"
          onChange={(e) => setEditActive(e.target.value)}
        />
      </label>
      
      </form>

      <div class="table">{createList()}</div>
     
    </div>
  );
}
export default Header;
