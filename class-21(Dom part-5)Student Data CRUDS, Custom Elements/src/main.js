const student_create_form = document.getElementById("student-create-form");
const studentList = document.getElementById("student-data-list");
const msg = document.querySelector(".msg");

//Show student Data====
const getAllstudents = () => {
    const students = getDataLS("students");

    let dataList = "";

    if (students) {
        students.forEach((item, index) => {
            dataList += `
        <tr>
           <td>${index + 1}</td>
            <td><img src="${item.photo}"
            alt=""></td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>${item.location}</td>
            <td>
            <button class="btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#student-show">
            <i class="fa fa-eye"></i></button>
            <button class="btn btn-sm btn-warning"><i class="fa fa-edit"></i></button>
            <button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>
            </td>
           </tr>
        `;
        });

    } else {
        dataList = `
    <tr>
        <td colspan="7" class="text-center text-danger">No data found</td>
    </tr>
`;
    }

    studentList.innerHTML = dataList;
};

getAllstudents();

//submit student creat form==
student_create_form.onsubmit = (e) => {
    e.preventDefault();

    //get form data===
    const form_data = new FormData(e.target);
    const { name, email, phone, location, photo } = Object.fromEntries(form_data);

    //form validation===
    // form validation===
    if (!name || !email || !phone || !location || !photo) {
        msg.innerHTML = createAlert("All fields are required");
    } else if (!isEmail(email)) {
        msg.innerHTML = createAlert("Invalid Email Address", "warning");
    } else if (!isMobile(phone)) {
        msg.innerHTML = createAlert("Invalid Mobile Number", "warning");
    } else {
        sendDataLS("students", {
            id: createID(),
            name,
            email,
            phone,
            location,
            photo,
            createdAt: Date.now(),
        });
        msg.innerHTML = createAlert("Student Data Created", "success");
        e.target.reset();
        getAllstudents();
    }
};

