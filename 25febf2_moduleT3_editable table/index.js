const Add_rowbutton = document.getElementById("btn")

const tablebody = document.getElementById("contain")
const tableData = [];


Add_rowbutton.addEventListener("click", () => {

    tablebody.innerHTML = tablebody.innerHTML + `
  <td>${tableData.length + 1}</td>
  <form >
  <td><input id="studentname" type="text"/></td>
  <td><input id="rollno" type="number"/></td>
  <td><input id="subject" type="text"/></td>
  <td><input id="marks" type="number"/></td>
  <td><input id="markedby" type="email"/></td>
  <td><button class="savebutt" onclick="submitdata(document.getElementById('studentname').value,document.getElementById('rollno').value,document.getElementById('subject').value,document.getElementById('marks').value,document.getElementById('markedby').value)">Save</button></td>
  </form>`

    Add_rowbutton.disabled = true
})

function submitdata(name, roll, subject, marks, markedby) {
    Add_rowbutton.disabled = false

    if (name == "" || roll == "" || marks == "" || markedby == "" || subject == "") {
        alert("fill all detail correctly ");
    }
    else if (markedby.includes("@") == false) {
        alert(" Enter valid Email ID").style.color.red;
    }
    else {
        let data = {
            id: tableData.length + 1,
            student_name: name,
            student_roll: roll,
            subject: subject,
            marks: marks,
            markedBy: markedby
        }
        console.log("New_Row_Entered:", data);
        tableData.push(data);
        console.log(" Table_Data", tableData);
        tablebody.innerHTML = tableData.map((item, ind) => {
            return (` <tr> <td>${item.id}</td>
            <td>${item.student_name}</td>
            <td>${item.student_roll}</td>
            <td>${item.subject}</td>
            <td>${item.marks}</td>
            <td>${item.markedBy}</td></tr>`)
        }).join("")

    }

}

