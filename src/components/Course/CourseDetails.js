import React from 'react'

function CourseDetails() {
  return (


    <div>

        <div>Course Name : Geeks UI - Design & Development </div>
        <div class = "coursedetailtabs">

        <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">Overview</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Phases</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Files</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Students</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab" tabindex="0">This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next. </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">Clicking another tab will toggle the visibility of this one for the next.</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">Clicking another tab will toggle the visibility of this one for the next.</div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">Clicking another tab will toggle the visibility of this one for the next.</div>
 
</div>
        </div>

    </div>
  )
}

export default CourseDetails