
$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
  
    //createListAll();
    createListAvailable();
    checkAll();
    setAllCheckboxes();
  });
  
  // The code starts with the concepts of Course Groups. These are logical groupings of 
  // the courses that make it easy to organize the course listings. Note that they have
  // Title - Shows up in the first columnas a title for the group
  // Courses - Array of courses using the same text as courselist - Course
  // Hours - Total Number of hours in a category 
  var semesters = ["Fall 2019", "Spring 2020", "Summer 2020", "Fall 2020", "Spring 2021", "Summer 2021"]
  
  var coursegroups = [{
    "Title": "General Ed Prerequisites",
    "Courses": ["ENC1101"],
    "Hours": 3
  }, {
    "Title": "Math Prerequisites",
    "Courses": ["MAC1105", "MAC1114", "MAC1140", "MAC2311", "STA2023"],
    "Hours" : 16
  }, {
    "Title": "Technical Prerequisites",
    "Courses": ["COP1000", "COP2800", "CTS3348", "CET3116", "EET3086", "COT3100"],
    "Hours" : 19
  }, {
    "Title": "Required Courses (42 hours)",
    "Courses": ["GEB3213", "CIS4250", "CEN3722", "COP3530", "COP4708",
      "COP4610", "CIS4360", "CNT3104", "CNT4007", "CNT4703",
      "CDA4101", "CEN4801", "CEN4010", "COP4813", "CIS4510" ],
    "Hours" : 42
  }, {
    "Title": "Web Systems (6 hours)",
    "Courses": ["COP4709", "COP4834"],
    "Hours" : 6
  }, {
    "Title": "Cybersecurity (6 hours)",
    "Courses": ["CET4860", "CET4861", "CET4862", "CET4884"],
    "Hours" : 6
  }]
  
  // This is a global array of objects courselist - it contains an object that has each 
  // of the courses and informatin about the courses
  // Option JSON Fields are PreReq and CoReq - both of which are arrays of the PreRequisites and CoRequeisites
  
  var courselist = [{
    "Course": "ENC1101",
    "Name": "Composition",
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 3, 4, 5, 6]
  }, {
    "Course": "MAC1105",
    "Name": "College Algebra",
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 3, 4, 5, 6]
  }, {
    "Course": "MAC1114",
    "Name": "Trigonometry",
    "PreReq": ["MAC1105"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 3, 4, 5, 6]
  }, {
    "Course": "MAC1140",
    "Name": "PreCalculus",
    "PreReq": ["MAC1105"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 3, 4, 5, 6]
  
  }, {
    "Course": "MAC2311",
    "Name": "Calculus",
    "PreReq": ["MAC1140", "MAC1114"],
    "Taken": 99,
    "Hours": 4,
    "Offering": [1, 2, 3, 4, 5, 6]
  
  }, {
    "Course": "STA2023",
    "Name": "Statistics",
    "PreReq": [],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 3, 4, 5, 6]
  }, {
    "Course": "COT3100",
    "Name": "Discrete Analaysis",
    "PreReq": ["MAC1105"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 4, 5]
  
  }, {
    "Course": "COP1000",
    "Name": "Principles of Programming",
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 3, 4, 5, 6]
  
  }, {
    "Course": "COP2800",
    "Name": "Java Programming",
    "PreReq": ["COP1000"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 3, 4, 5, 6]
  
  }, {
    "Course": "CTS3348",
    "Name": "Linux Administration",
    "PreReq": ["COP1000"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 3, 4, 5, 6]
  
  }, {
    "Course": "CET3116",
    "Name": "Digital Technology",
    "PreReq": ["MAC1105"],
    "Taken": 99,
    "Hours": 4,
    "Offering": [1, 2, 3, 4, 5, 6]
  
  }, {
    "Course": "EET3086",
    "Name": "Electrical Circuits",
    "PreReq": ["MAC1114"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 3, 4, 5, 6]
  
  }, {
    "Course": "GEB3213",
    "Name": "Business Writing",
    "PreReq": ["ENC1101"],
    "Hours": 3,
    "Taken": 99,
    "Offering": [1, 2, 3, 4, 5, 6]
  
  }, {
    "Course": "CIS4250",
    "Name": "Ethics in Computing",
    "PreReq": ["GEB3213"],
    "Taken": 99,
    "Hours": 1,
    "Offering": [1, 3, 4, 6]
  
  }, {
    "Course": "CEN3722",
    "Name": "Human Computer Interfaces",
    "PreReq": ["COP2800"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 3, 4, 6]
  
  }, {
    "Course": "COP3530",
    "Name": "Data Structures",
    "PreReq": ["COT3100", "COP2800"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 4, 5]
  
  }, {
    "Course": "COP4708",
    "Name": "Applied Database",
    "PreReq": ["COP2800"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 3, 4,5, 6]
  
  }, {
    "Course": "COP4610",
    "Name": "Operating Systems",
    "PreReq": ["CTS3348"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 4, 5]
  
  }, {
    "Course": "CIS4360",
    "Name": "Applied Cybersecurity",
    "PreReq": ["CTS3348"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 3, 4, 5, 6]
  
  }, {
    "Course": "CNT3104",
    "Name": "Introduction to Telecom",
    "PreReq": ["EET3086"],
    "Taken": 99,
    "Hours": 2,
    "Offering": [1, 3, 4, 6]
  
  }, {
    "Course": "CNT4007",
    "Name": "Data Communications",
    "PreReq": ["CNT3104"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 4, 5]
  
  }, {
    "Course": "CNT4703",
    "Name": "Voice Data Networks",
    "PreReq": ["CNT3104"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 3, 4, 6]
  
  }, {
    "Course": "CDA4101",
    "Name": "Computer Organization and Design",
    "PreReq": ["CET3116"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 4, 5]
  
  }, {
    "Course": "CEN4801",
    "Name": "Systems Inegration",
    "PreReq": ["COP3530", "COP4708", "CNT3104"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 4]
  
  }, {
    "Course": "CEN4010",
    "Name": "Software Engineering",
    "PreReq": ["COP3530"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [2, 5]
  
  }, {
    "Course": "COP4813",
    "Name": "Web Systems I",
    "PreReq": ["COP3530"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 4]
  
  }, {
    "Course": "CIS4510",
    "Name": "Project Management in IT",
    "PreReq": ["CEN4010"],
    "CoReq" : ["CEN4801"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 4]
  
  }, {
    "Course": "COP4709",
    "Name": "Applied Database II",
    "PreReq": ["COP4708"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [2, 5]
  
  }, {
    "Course": "COP4834",
    "Name": "Web Systems II",
    "PreReq": ["COP4813", "COP4708"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [2, 5]
  
  }, {
    "Course": "CET4884",
    "Name": "Security Methods and Practices",
    "PreReq": ["CIS4360"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 3, 4, 5, 6]
  
  }, {
    "Course": "CET4860",
    "Name": "Introdcution to Digital Forensics",
    "PreReq": ["CIS4360"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [2, 3, 5, 6]
  
  }, {
    "Course": "CET4861",
    "Name": "Advanced Digital Forensics",
    "PreReq": ["CET4860"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 4, 5]
  
  }, {
    "Course": "CET4862",
    "Name": "Network Forensics and Incident Response",
    "PreReq": ["CET4860"],
    "Taken": 99,
    "Hours": 3,
    "Offering": [1, 2, 4, 5]
  
  }];
  
  function createListAvailable() {
  
    // This function contructs the entire table of courses where 
    // everything is dynamically created
    
    // It goes through each group in coursegroups and creates that group
  
    for (var i = 0; i < coursegroups.length; i++) {
      createGroupRow(i);
    }
    createHoursRow();
  }
  
  function createGroupRow(_index) {
  
  // Each group of courses starts with a row header - this is dynamically generated
  
    var gr_index = 'gr_' + _index;
    $('#ctable tbody').append(
      $('<tr />', {
        id: gr_index
      }));
  
  // The first row - row 0 is special
    $('#' + gr_index).append($('<td />', {
      id: gr_index + '_0',
      text: coursegroups[_index].Title,
      class: "grouprow"
    }));
  
  // This creates all the columns for the semesters
      for (var i=1; i <=  semesters.length; i++){
    $('#' + gr_index).append($('<td />', {
      id: gr_index + '_' + i,
      text: semesters[i-1],
      class: "grouprow"
    }));
  }
  
  // Each group contains an array of courses as we must create a row
  // for each of these courses
  
    for (var i = 0; i < coursegroups[_index].Courses.length; i++) {
      var id = getCourseID(coursegroups[_index].Courses[i]);
      if (id == undefined)
        alert("Course " + coursegroups[_index].Courses[i] + " is not in courses list");
  
      createCourseRow(id);
    }
  
  }
  
  function createCourseRow(_index) {
    // This will insert an entire row into the table
    // _index - index of course to be added
    // course - course referenced by index in courselist (global)
    
    if (_index == undefined) alert("Attempting to create undefined course");
  
  // Create the table row
  var tr_index = 'tr_' + _index;
    $('#ctable tbody').append($('<tr />', {
      id: tr_index
    }));
  
  
    // The first column is the taken column
    $('#' + tr_index).append(addTakenCheckbox(_index, $('<td />', {
      id: tr_index + '_0'
    })));
    
  // The next 6 columns are for the semesters
  for (var i=1; i <= semesters.length; i++){
        $('#' + tr_index).append(addSemesterCheckbox(_index, i, $('<td />', 
          { id: tr_index + '_' + i
        })));
    }
  
  }
  
  function createHoursRow() {
  // The hours for each column are counted and placed in the final row
  
    $('#ctable tbody').append(
      $('<tr />', {
        id: 'hours'
      }));
  
    $('#hours').append($('<td />', {
      id: 'h0',
      text: 'Hours Per Term:',
      class: "grouprow"
    }));
  
  for (var i=1; i<=semesters.length; i++){
    $('#hours').append($('<td />', {
      id: 'h'+i,
      text: 'hours',
      class: "grouprow"
    }));
  }
  }
  
  function addTakenCheckbox(_index, con) {
  
  // The first column is the taken column that allows the user to 
  // specify if the course was previously taken - it has index 0
  // A chekbox is placed inside of each cell in this column with 
  // the id of the index of the course in the courselist
  
    // _index = index of course in courselist
    // courselist = actual course; Course, Name, PreReq, CoReq, Offering
    // container - the div for the check boxes
    if (_index == undefined) alert("Attempting to create undefined row");
  
    var _id = _index;
    var _course = courselist[_index].Course;
    var _name = courselist[_index].Name;
    var _disabled = false;
  
  
    // Creates the new object
    var pr = $('<div />', {
      class: 'hoverhide',
      text: 'Pre-requsites: ' + courselist[_index].PreReq
    });
  
  
    var l = $('<label />', {
      text: _course + ' ' + _name,
      class: 'taken_container'
    }).appendTo(con);
  
    pr.appendTo(l);
  
    $('<input />', {
      type: 'checkbox',
      id: _id,
      value: _name,
      disabled: _disabled,
      class: 'fixed_checkbox',
      click: function() {
        clickTakenCourse(event.target.id)
      },
    }).appendTo(l);
  
    $('<span />', {
      class: 'checkmark'
    }).appendTo(l);
  
  
  
    return con;
  }
  
  function addSemesterCheckbox(_index, _term, con) {
  // Each of the remaining columns is specific to a semester
  // that the course can be taken. Each of these has a checkbox in it 
  // that is identifed by an id that is the index_term where index
  // is the index of the course in the courselist and term is 
  // 1-6 corresponding to the term of the course
  
  
    if (_index == undefined) return con;
  
    var course = courselist[_index];
    var semesters = course.Offering;
  
    if (!semesters.includes(_term)) return con;
  
  
    var _id = _index + '_' + _term;
    var _course = ' '; //courselist[_index].Course;
    var _name = ' '; //courselist[_index].Name;
    var _disabled = true;
  
    // Creates the new object
    var l = $('<label />', {
      text: ' ',
      class: 'semester_container'
    }).appendTo(con);
  
    $('<input />', {
      type: 'checkbox',
      id: _id,
      value: _name,
      disabled: _disabled,
      class: 'fixed_checkbox',
      click: function() {
        clickSemesterCourse(event.target.id)
      },
    }).appendTo(l);
  
    $('<span />', {
      class: 'checkmark2',   
    }).appendTo(l);
    
      $('<span />', {
      class: 'tooltiptext',
      text: 'Click to take in this semester, Must take prerequisite: ' + course.PreReq + ' in prior semester to select'
    }).appendTo(l);
  
  
    return con;
  }
  
  
  function prerequisitesMet(_id, _termchecked = 0) {
    // Looks at a course and determines if the pre-requisites are met
    // _id is the id of the course
    //
    var prereqs = courselist[_id].PreReq;
  
    if (prereqs == null) {
      return true;
    }
    if (prereqs.length == 0) {
      return true;
    }
  
       if (courselist[_id].PreReq.length == 1) return isTaken(courselist[_id].PreReq[0], _termchecked);
    // Check each course in the pre-requisites to see if they have been taken
    
    if (courselist[_id].PreReq.length == 2) 
       return isTaken(courselist[_id].PreReq[0], _termchecked) && 
                 isTaken(courselist[_id].PreReq[1], _termchecked);
  
    for (var i = 0; i < courselist[_id].PreReq.length; i++) {
      if (!isTaken(courselist[_id].PreReq[i], _termchecked)) {
        return false;
      }
    }
    return true;
  }
  
  function corequisitesMet(_id, _termchecked = 0) {
    // Looks at a course and determines if the co-requisites are met
    // _id is the id of the course
  
    //
   
    var coreqs = courselist[_id].CoReq;
  
    if (coreqs == null) {
      return true;
    }
    if (coreqs.length == 0) {
      return true;
    }
  
    var _term = _termchecked + 1; 
    if (courselist[_id].CoReq.length == 1) return isTaken(courselist[_id].CoReq[0], _term);
    // Check each course in the pre-requisites to see if they have been taken
  
    if (courselist[_id].PreReq.length == 2)
      return isTaken(courselist[_id].CoReq[0], _term) &&
        isTaken(courselist[_id].CoReq[1], _term);
  
    for (var i = 0; i < courselist[_id].CoReq.length; i++) {
      if (!isTaken(courselist[_id].CoReq[i], _term)) {
        return false;
      }
    }
    return true;
  }
  
  function isTaken(_course, _termchecked) {
    // _course is the title of the course .Course
    // _termchecked is term (1-6) to check 
  
    // Go through each course to determine if it has been taken.
    // if the course was taken prior to _termchecked - answer true
  
    for (var i = 0; i < courselist.length; i++) {
      if (courselist[i].Course == _course) {
        if (courselist[i].Taken < _termchecked) {     
          return true;
        }
      }
    }
    return false;
  }
  
  
  
  function clickTakenCourse(_index) {
  
    // THis is what gets called when a course is clicked
    var course = courselist[_index];
  
    if ($('#' + _index).prop('checked') == true) {
      course.Taken = 0;
  }
    else {
      course.Taken = 99;
    }
  
  
    // Now we need to add courses to available based on pre-requisites
    checkAll();
    setAllCheckboxes();
   
  
  }
  
  function clickSemesterCourse(_id) {
  // This is triggered when a user clicks on a course in columns 1-6
  
    var _index = _id.split('_')[0]; // index of course in courselist
    var _term = _id.split('_')[1]; // term and row of table 1-6
  
    // Special case - only one checked per row, turn off others
    // turn off first column
    $('#' + _index).prop('checked', false);
  
    // turn off remaining columns based on semester
    for (var j = 1; j <= 6; j++) {
      var _cid = _index + "_" + j;
      if (j != _term) {
        $('#' + _cid).prop('checked', false);
      }
    }
  
  
    if ($('#' + _id).prop('checked') == true) {
      courselist[_index].Taken = _term;
    } else {
      courselist[_index].Taken = 99;
    }
  
    // Go through each course and turn check boxes on or off
  
    checkAll();
    setAllCheckboxes();
  }
  
  
  function setAllCheckboxes() {
  // This sets all check boxes to deal with Pre-requisite and oo-requisite courses
  
    for (var j = 1; j <= 6; j++) {
      for (var i = 0; i < courselist.length; i++) {
  
        var _id = "#" + i + "_" + j;
  
        // i is the course to check
        // j is the term
        var cr_met = corequisitesMet(i,j);
        var pr_met = prerequisitesMet(i, j);
        
        var met = (cr_met && pr_met);
  
        if (met) enableCourse(_id)
        else disableCourse(_id);
  
      }
    }
  }
  
  function disableCourse(_cbid) {
  /*
     if (_cbid.includes('_')){
        var _cid = _cbid.substring(1).split("_")[0];
        courselist[_cid].Taken = 99;
     }
  */
    $(_cbid).prop('disabled', true);
    $(_cbid).prop('checked', false);  
  }
  
  
  function enableCourse(_cbid) {
    /*if (_cbid.includes('_')){
      alert(_cbid.substring(1).split("_")[1]);
          var _cid = _cbid.substring(1).split("_")[0];
        var _tid = _cbid.substring(1).split("_")[1];
      courselist[_cid].Taken = _tid;
    //  alert(_cbid);
      }*/
    $(_cbid).prop('disabled', false);
  }
  
  function getCourseID(name) {
  // Returns the id of the course from the courselist given the name
  
    for (var i = 0; i < courselist.length; i++) {
      if (courselist[i].Course == name) return i;
    }
    alert(name + " Not found in course list");
  }
  
  function checkAll() {
  // Ensures the checked status of the course matches the state
  
    for (var i = 0; i < courselist.length; i++) {
      if ($('#' + i).prop('checked') == true) courselist[i].Taken = 0;
      for (var j = 1; j <= 6; j++) {
        if ($('#' + i + '_' + j).length) {
          if ($('#' + i + '_' + j).prop('checked') == true) courselist[i].Taken = j;
        }
      }
    }
    calculateHours();
  }
  
  function calculateHours(){
    var hours = [0,0,0,0,0,0,0];
    
      for (var i=0; i<courselist.length; i++) {
        for (var j=1; j <= 6; j++){
        if ($('#' + i + '_' + j).length) {
          if ($('#' + i + '_' + j).prop('checked')) {
                     hours[0] += courselist[i].Hours;
            hours[j] += courselist[i].Hours;
          }
        }
      }
    }
    
    $('#h0').text('Total Hours: ' + hours[0]);
    for (var i = 1; i<=semesters.length; i++) { $('#h'+i).text(hours[i]); }  
  }
  
  function GetRegisteredHoursForTerm(_term){
  // term must be between 0 and 6 - 0 is total, 1-6 is each sesmeter
  var hours = 0; 
  var total = 0
  for (var i=0; i<courselist.length; i++) {
        for (var j=1; j <= 6; j++){
        if ($('#' + i + '_' + j).length) {
          if ($('#' + i + '_' + j).prop('checked')) {
                     total += courselist[i].Hours;
            if (j == _term) hours += courselist[i].Hours;
          }
        }
      }
    }
    if (_term == 0) return total;
    return hours;
  }
  
  $( "#print" ).click(function() { printSchedule()
  });
  
  function printSchedule() { 
      $('#output').empty();
      for (var j=1; j <= semesters.length; j++){
      var hours = 0;
          $('#output').append('<b>'+semesters[j-1] + ' Term</b><br/>');
      for (var i=0; i<courselist.length; i++) {
        if ($('#' + i + '_' + j).length) {
          if ($('#' + i + '_' + j).prop('checked')) {
                      $('#output').append(courselist[i].Course + ' ');
                      $('#output').append(courselist[i].Name);
                      $('#output').append(' (' + courselist[i].Hours + ' hrs) <br/>');
            hours += courselist[i].Hours;
          }
        }
      }
      $('#output').append('Total Hours Taken in Term: ' + hours + ' hrs<br/><br/>');
      
  }
      $('#output').append('<br/>');
      $('#output').append(
      $('<input />', {
      type: 'button',
      id: 'printschedule',
      value: "Print Schedule",
      class: "printbutton",
      click: function() { printData('output')}
    }))
    }
  
  function printData(element)
  {
     var divToPrint=document.getElementById(element);
     newWin= window.open("");
     newWin.document.write(divToPrint.outerHTML);
     newWin.print();
     newWin.close();
  }
  
  
  function createSchedule(shours){
  // Creates a schedule with the # of hours shours
    var hours = 0;
    for (var _term = 1; _term <= 6; _term++ ){
    
      hours = 0; _index = 0; 
      while (hours <= shours){
        var _id = _index + '_' + _term;
        
        hours += RegisterIfAvailable(_index, _id);
        _index++;
        
        if (_index > courselist.length) break;
      }
    }
    printSchedule();
  }
  
  function RegisterIfAvailable(_cid, _id){
  // _cid is the id of the checkbox for previously taken courses (also same as course ID)
  // _id is the id of the checkbox for semester courses (course ID + _ + semester ID)
  // If a course is available at the _id - it will check to register and
  // return the number of hours, else it will return a 0
  
  
  //console.log(courselist[_cid].Taken);
  debugger;
        if (
        (!!document.getElementById(_cid))						// Does course checkbox exist
        && (!!document.getElementById(_id))					// Does course semester checkbox exist
        && (!document.getElementById(_cid).checked) // Is course not checked
        && (!document.getElementById(_id).checked) 	// Is semester course not checked
        && (!document.getElementById(_id).disabled) // Is checkbox not disabled
        && (courselist[_cid].Taken == 99))					
  
              {
          // Here we will pass through each class - if not clicked, click it.
          console.log(_cid);
          $('#'+_id).click(); clickSemesterCourse(_id); 
  //        console.log(_cid);
          return courselist[_cid].Hours; 
        } 
        return 0;
  }
  
  function createScheduleUsingCourseGroups(_hours){
  // This will parse through each of the course groups and ensure courses are taken
  // from the group meeting the total hours of the group requirement
  
      for (var i = 0; i < coursegroups.length; i++){
          ReqisterCoursesInCourseGroup(_hours, coursegroups[i]);
      }
  }
  
  function IsCourseTaken(_cid){
  // Returns true or false if course is taken
  
  // check for previously taken
        if ($('#' + _cid ).length) {
          if ($('#' + _cid).prop('checked')) {
                     return true;
        }
      }
  
  
    for (var j=1; j <= 6; j++){
        if ($('#' + _cid + '_' + j).length) {
          if ($('#' + _cid + '_' + j).prop('checked')) {
                     return true;
        }
      }
      return false;
      }
  }
  
  function GetRegisteredHoursForCoursegroup(_coursegroup){
  // 
  var total = 0
  // for every course in the course group
  for (var c=0; c<_coursegroup.Courses.length; c++) {
      
      var i = getCourseID(_coursegroup.Courses[c]);
  
      // for every term
          if (IsCourseTaken(i))  total += courselist[i].Hours;
    }
    
    return total;
  }
  
  
  function ReqisterCoursesInCourseGroup(_hours, _coursegroup){
    // _hours is the maximum number of hours to register for in a term
    // _coursegroup is a group of courses in a category of courses
    
    
    // Start with the course group
    for(var i=0; i < _coursegroup.Courses.length; i++){
       var _cid = getCourseID(_coursegroup.Courses[i]); 
          
       var _coursegroup_hours = 0;
           var _registered_hours = 0;
       
       for(var _term = 1; _term <= 6; _term++){
          // if not maxed out on hours - go ahead and register
          
          _registered_hours = GetRegisteredHoursForTerm(_term);
          _coursegroup_hours = GetRegisteredHoursForCoursegroup(_coursegroup);
          
          //console.log("Registered Term: " + _registered_hours);
                  //console.log("Course Group: " + _coursegroup_hours);
               if ((_registered_hours < _hours) && (_coursegroup_hours < _coursegroup.Hours)){
          
            // _id is the ID of the checkbox
            var _id = _cid + '_' + _term;
            //console.log(_id);
              RegisterIfAvailable(_cid, _id);
          }
       }
    }
  }
  
  $("#hour_6").click(function() {createScheduleUsingCourseGroups(6);});
  $("#hour_12").click(function() {createScheduleUsingCourseGroups(12);});
  