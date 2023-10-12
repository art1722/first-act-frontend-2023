async function getData() {
  // GET data
  const regData = await fetch("https://firstact-api.thinc.in.th/courses");
  const regDataJson = await regData.json();
  const courses = regDataJson.courses;

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

getData();
