async function main() {
  // GET data
  const regData = await fetch("https://firstact-api.thinc.in.th/courses");
  const regDataJson = await regData.json();
  const courses = regDataJson.courses;

  // sample data
  // {
  //   "courseNo": "0123105",
  //   "abbrName": "THAI WRIT WORK",
  //   "courseNameTh": "การเขียนภาษาไทยในที่ทำงาน",
  //   "courseNameEn": "THAI WRITING IN WORKPLACE",
  //   "department": "สถาบันภาษาไทยสิรินธร",
  //   "credit": 3,
  //   "creditHours": "LECT 1.0 CR + NL23 2.0 CR(LECT 1.0 HR + PRAC 4.0 HR)",
  //   "genEdType": "HU",
  //   "totalSeats": 40,
  //   "updatedAt": "2022-09-07T05:55:49.377Z"
  // },

  const coursesContainer = document.querySelector("#courses");

  coursesContainer.innerHTML = courses
    .map((course) => {
      return `
      <div class="course-item">
          <h3>${course.abbrName} ${course.courseNo}</h3>

          <h4>จำนวนหน่วยกิต</h4>

          <p>${course.credit} หน่วยกิต</p>

          <h4>ภาควิชา/กลุ่มวิชา/สาขาวิชา</h4>
          <p>${course.department}</p>

          <h4>ประเภท GenEd</h4>
          <p>${course.genEdType}</p>

          <h4>จำนวนที่นั่ง</h4>
          <p>${Math.floor(Math.random() * course.totalSeats)}/${
        course.totalSeats
      }</p>
        </div>
      </div>
      `;
    })
    .join("");
}

main();
