
      function showConditions(event) {
        event.preventDefault();
        document.getElementById("conditionsModal").style.display = "block";
      }

      function closeConditions() {
        document.getElementById("conditionsModal").style.display = "none";
      }

      // Close the modal when clicking outside of it
      window.onclick = function (event) {
        var modal = document.getElementById("conditionsModal");
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
const collegeSelect = document.getElementById("college");
const departmentSelect = document.getElementById("department");

collegeSelect.addEventListener("change", () => {
    const selectedCollege = collegeSelect.value;
    let departments = [];

    if (selectedCollege === "institute") {
        departments = ["قسم الحاسوب", "قسم التمريض"];
    } else if (selectedCollege === "medical") {
        departments = ["قسم الصيدلة", "قسم المختبرات", "قسم التمريض", "قسم التخدير"];
    } else if (selectedCollege === "engineering") {
        departments = ["قسم الهندسة المدنية", "قسم هندسة العمارة", "قسم تقنية المعلومات"];
    } else if (selectedCollege === "administration") {
        departments = ["قسم إدارة الأعمال", "قسم المحاسبة", "قسم التسويق", "قسم نظم المعلومات الإدارية"];
    }

    departmentSelect.innerHTML = "<option value='' disabled selected>اختر القسم</option>";
    departments.forEach((department) => {
        const option = document.createElement("option");
        option.value = department;
        option.textContent = department;
        departmentSelect.appendChild(option);
    });
});




// Attach updateProgress to input elements
document.querySelectorAll('input, select').forEach(element => {
    element.addEventListener('change', updateProgress);
});
function refreshPage() {
    // You can include form validation or submission here if needed
    location.reload();
}



function updateText(tabId) {
    let textElement = document.getElementById("dynamic-text");

    if (tabId === "tab1") {
      textElement.innerHTML = "قم بتعبئة كافة البيانات المطلوبة كما ورد بالنص في إستمارة الثانوية العامة";
    } else if (tabId === "tab2") {
      textElement.innerHTML = "قم بتعبئة كافة البيانات المطلوبة كما ورد بالنص في إستمارة الثانوية العامة";
    } else if (tabId === "tab3") {
      textElement.innerHTML = "الرجاء إدخال بيانات الهوية الرسمية بشكل صحيح";
    }
  }




      function showMainForm() {
        const section1 = document.getElementById("branch-college-section");
        const mainForm = document.getElementById("registration-form");
      
        // Hide Section 1 with animation
        section1.style.opacity = "0";
        section1.style.transform = "translateY(-30px)";
        setTimeout(() => {
          section1.style.display = "none";
        }, 100); // Match the transition duration
      
        // Show Section 2 with animation
        setTimeout(() => {
          mainForm.style.display = "flex";
          setTimeout(() => {
            mainForm.style.opacity = "5";
            mainForm.style.transform = "translateY(0)";
          }, 50);
        }, 500);
      }

    

      



      // Function to navigate to the next section
function nextSection(currentSection) {
  const sections = document.querySelectorAll('.content section');
  const tabs = document.querySelectorAll('.tabs input[type="radio"]');

  if (currentSection < sections.length) {
    // Hide the current section
    sections[currentSection - 1].style.display = 'none';

    // Show the next section
    sections[currentSection].style.display = 'block';

    // Check the next tab
    tabs[currentSection].checked = true;
  }
}

// Function to navigate to the previous section
function previousSection(currentSection) {
  const sections = document.querySelectorAll('.content section');
  const tabs = document.querySelectorAll('.tabs input[type="radio"]');

  if (currentSection > 1) {
    // Hide the current section
    sections[currentSection - 1].style.display = 'none';

    // Show the previous section
    sections[currentSection - 2].style.display = 'block';

    // Check the previous tab
    tabs[currentSection - 2].checked = true;
  }
}

// Initialize the form by showing the first section and hiding the rest
function initializeForm() {
  const sections = document.querySelectorAll('.content section');
  sections.forEach((section, index) => {
    if (index === 0) {
      section.style.display = 'block'; // Show the first section
    } else {
      section.style.display = 'none'; // Hide the rest
    }
  });
}

// Call the initializeForm function when the page loads
window.onload = initializeForm;



// disable the Next button until all three dropdowns are selected

function validateForm() {
  const branch = document.getElementById("branch").value;
  const college = document.getElementById("college").value;
  const department = document.getElementById("department").value;
  const nextButton = document.getElementById("nextButton");

  // Check if all fields are selected
  if (branch && college && department) {
      nextButton.classList.add("enabled");
      nextButton.classList.remove("disabled");
      nextButton.onclick = showMainForm; // Enable click function
  } else {
      nextButton.classList.remove("enabled");
      nextButton.classList.add("disabled");
      nextButton.onclick = null; // Disable click function
  }
}

