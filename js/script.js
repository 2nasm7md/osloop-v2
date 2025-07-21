const hamburger = document.querySelector("#toggle-btn");
hamburger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapse");
  hamburger.classList.toggle("collapse");
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".stats-analysis-form");

  const fileInput = document.querySelector("#file-data");
  const previewContainer = document.querySelector("#file-preview");

  // معاينة الملفات عند الرفع
  fileInput.addEventListener("change", function () {
    previewContainer.innerHTML = ""; // مسح السابق
    const files = Array.from(fileInput.files);

    if (!files.length) return;

    const allowedExtensions = [".xls", ".xlsx", ".csv"];

    files.forEach((file, index) => {
      const fileName = file.name.toLowerCase();
      const isValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));

      if (!isValidExtension) {
        alert(`الملف "${file.name}" غير مسموح به. يسمح فقط بملفات Excel و CSV.`);
        fileInput.value = "";
        previewContainer.innerHTML = "";
        return;
      }

      const fileSizeKB = Math.round(file.size / 1024);
      const fileBox = document.createElement("div");
      fileBox.className = "file-box";

      fileBox.innerHTML = `
        <span class="close-btn" data-index="${index}">&times;</span>
        <span>${file.name}</span>
        <img src="./assets/excel-icon.png" alt="icon" />
        <small>${fileSizeKB}kb</small>
      `;

      previewContainer.appendChild(fileBox);
    });

    // زر الحذف
    previewContainer.querySelectorAll(".close-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const index = parseInt(this.getAttribute("data-index"));
        const dataTransfer = new DataTransfer();

        const newFiles = Array.from(fileInput.files).filter((_, i) => i !== index);
        newFiles.forEach(file => dataTransfer.items.add(file));

        fileInput.files = dataTransfer.files;
        fileInput.dispatchEvent(new Event("change")); // لإعادة التحديث
      });
    });
  });

  // إرسال الفورم
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const researchQ = form.querySelector('[name="research-q"]').value;
    const email = form.querySelector("#email").value;
    const phone = form.querySelector("#phone").value;
    const files = Array.from(fileInput.files);

    if (!files.length) {
      alert("من فضلك اختر ملف أو أكثر من ملفات البيانات.");
      return;
    }

    const allowedExtensions = [".xls", ".xlsx", ".csv"];
    const invalidFiles = files.filter(file => {
      const name = file.name.toLowerCase();
      return !allowedExtensions.some(ext => name.endsWith(ext));
    });

    if (invalidFiles.length) {
      alert("بعض الملفات غير مسموح بها. الرجاء اختيار ملفات Excel أو CSV فقط.");
      return;
    }

    const researchPlanFile = form.querySelector("#research-plan-file").files[0];

    const formData = {
      researchQuestions: researchQ,
      email: email,
      phone: phone || "غير مدخل",
      dataFiles: files.map(file => file.name),
      researchPlanFileName: researchPlanFile ? researchPlanFile.name : null,
    };

    console.log("بيانات النموذج:", formData);
  });
});



