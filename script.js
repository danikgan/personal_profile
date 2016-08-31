$('document').ready(function(){	
	/*----------------------------------- Loading -----------------------------------*/
    $(document).ajaxStart(function(){$("#wait").css("display", "block");	$( ".inside" ).html("");});
    $(document).ajaxComplete(function(){$("#wait").css("display", "none");});
	
	
	/*----------------------------------- Content (loaded externally) -----------------------------------*/
	$.ajaxSetup ({cache: false});
	$('.menEdu').click(function() {$( ".inside" ).load( "content_main/content.html #education");	$('.featured').toggle();});
	$('.menTechSkills').click(function() {$( ".inside" ).load( "content_main/content.html #techskills");	$('.featured').toggle();});	
	$('.menWorkExp').click(function() {$( ".inside" ).load( "content_main/content.html #workexp");	$('.featured').toggle();});
	$('.menProj').click(function() {$( ".inside" ).load( "content_main/content.html #proj");	$('.featured').toggle();});
	$('.menCovLet').click(function() {$( ".inside" ).load( "content_main/content.html #covlet");	$('.featured').toggle();});
	$('.menPerStat').click(function() {$( ".inside" ).load( "content_main/content.html #perstat");	$('.featured').toggle();});
	
	
	/*----------------------------------- Simple Transition: when to be closed -----------------------------------*/
	$('.transition').click(function() {$('.featured').toggle();});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var colorEducation = true;
	$('.toggleEducation').click(function() {
		$('.education').toggle();
		
		if(colorEducation == true) {
			$('.toggleEducation').html('<li class="modifications" type="disc">Education</li>');
			colorEducation = false;
		} else {
			$('.toggleEducation').html('<li class="modifications">Education</li>');
			colorEducation = true;
		}
	});
	
	var colorTechSkills = true;
	$('.toggleTechSkills').click(function() {
		$('.techSkills').toggle();
		
		if(colorTechSkills == true) {
			$('.toggleTechSkills').html('<li class="modifications" type="disc">Technical Skills</li>');
			colorTechSkills = false;
		} else {
			$('.toggleTechSkills').html('<li class="modifications">Technical Skills</li>');
			colorTechSkills = true;
		}
	});
	
	var colorWorkExperience = true;
	$('.toggleWorkExperience').click(function() {
		$('.workExperience').toggle();
		
		if(colorWorkExperience == true) {
			$('.toggleWorkExperience').html('<li class="modifications" type="disc">Work Experience</li>');
			colorWorkExperience = false;
		} else {
			$('.toggleWorkExperience').html('<li class="modifications">Work Experience</li>');
			colorWorkExperience = true;
		}
	});
	
	var colorProjects = true;
	$('.toggleProjects').click(function() {
		$('.projects').toggle();
		
		if(colorProjects == true) {
			$('.toggleProjects').html('<li class="modifications" type="disc">Projects</li>');
			colorProjects = false;
		} else {
			$('.toggleProjects').html('<li class="modifications">Projects</li>');
			colorProjects = true;
		}
	});
	
	var colorCoverLetter = true;
	$('.toggleCoverLetter').click(function() {
		$('.coverLetter').toggle();
		
		if(colorCoverLetter == true) {
			$('.toggleCoverLetter').html('<li class="modifications" type="disc">Cover Letter</li>');
			colorCoverLetter = false;
		} else {
			$('.toggleCoverLetter').html('<li class="modifications">Cover Letter</li>');
			colorCoverLetter = true;
		}
	});
	
	var colorPersonalStatement = true;
	$('.togglePersonalStatement').click(function() {
		$('.personalStatement').toggle();
		
		if(colorPersonalStatement == true) {
			$('.togglePersonalStatement').html('<li class="modifications" type="disc">Personal Statement</li>');
			colorPersonalStatement = false;
		} else {
			$('.togglePersonalStatement').html('<li class="modifications">Personal Statement</li>');
			colorPersonalStatement = true;
		}
	});
});