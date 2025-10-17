let arr = [10, 8, 5, 4, 3, 2, 1]

let reduceRes = arr.reduce((acc, curr) => acc * curr, 1)


Array.prototype.myMap = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        let newValue = cb(this[i], i, this)
        temp.push(newValue)
    }
    return temp
}

let res = arr.myMap(i => i + i)

const wordCount = (str) => str.trim().split(/\s+/).length;
const removeDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) === index);

let newArr = [
    "Composed",
    "Conceived",
    "Created",
    "Designed",
    "Developed",
    "Devised",
    "Established",
    "Founded",
    "Generated",
    "Implemented",
    "Initiated",
    "Instituted",
    "Introduced",
    "Launched",
    "Led",
    "Opened",
    "Originated",
    "Pioneered",
    "Planned",
    "Prepared",
    "Produced",
    "Promoted",
    "Started",
    "Released",
    "Advised",
    "Coached",
    "Conducted",
    "Directed",
    "Guided",
    "Demonstrated",
    "Illustrated",
    "Led",
    "Managed",
    "Organized",
    "Performed",
    "Presented",
    "Taught",
    "Trained",
    "Mentored",
    "Spearheaded",
    "Authored",
    "Accelerated",
    "Achieved",
    "Allocated",
    "Completed",
    "Awarded",
    "Persuaded",
    "Revamped",
    "Influenced",
    "Assessed",
    "Clarified",
    "Counseled",
    "Diagnosed",
    "Educated",
    "Facilitated",
    "Familiarized",
    "Motivated",
    "Referred",
    "Rehabilitated",
    "Reinforced",
    "Represented",
    "Moderated",
    "Verified",
    "Adapted",
    "Coordinated",
    "Developed",
    "Enabled",
    "Encouraged",
    "Evaluated",
    "Explained",
    "Informed",
    "Instructed",
    "Lectured",
    "Stimulated",
    "Teamed",
    "Collaborated",
    "Influenced",
    "Volunteered",
    "Partnered",
    "Motivated",
    "Coached",
    "United",
    "Analyzed",
    "Assessed",
    "Classified",
    "Collated",
    "Defined",
    "Devised",
    "Established",
    "Evaluated",
    "Forecasted",
    "Identified",
    "Interviewed",
    "Investigated",
    "Researched",
    "Tested",
    "Traced",
    "Designed",
    "Interpreted",
    "Verified",
    "Uncovered",
    "Clarified",
    "Collected",
    "Critiqued",
    "Diagnosed",
    "Examined",
    "Extracted",
    "Inspected",
    "Inspired",
    "Organized",
    "Reviewed",
    "Summarized",
    "Surveyed",
    "Systemized",
    "Arranged",
    "Budgeted",
    "Composed",
    "Conceived",
    "Conducted",
    "Controlled",
    "Co-ordinated",
    "Eliminated",
    "Improved",
    "Itemised",
    "Modernised",
    "Operated",
    "Organised",
    "Planned",
    "Prepared",
    "Processed",
    "Produced",
    "Redesigned",
    "Reduced",
    "Refined",
    "Resolved",
    "Revised",
    "Scheduled",
    "Simplified",
    "Solved",
    "Streamlined",
    "Transformed",
    "Revamped",
    "Addressed",
    "Advised",
    "Arranged",
    "Authored",
    "Co-authored",
    "Co-ordinated",
    "Communicated",
    "Corresponded",
    "Counselled",
    "Developed",
    "Demonstrated",
    "Directed",
    "Drafted",
    "Enlisted",
    "Facilitated",
    "Formulated",
    "Guided",
    "Influenced",
    "Interpreted",
    "Interviewed",
    "Instructed",
    "Lectured",
    "Led",
    "Liaised",
    "Mediated",
    "Moderated",
    "Motivated",
    "Negotiated",
    "Persuaded",
    "Presented",
    "Promoted",
    "Proposed",
    "Publicized",
    "Recommended",
    "Reconciled",
    "Recruited",
    "Resolved",
    "Taught",
    "Trained",
    "Translated"]

//    console.log(removeDuplicates(newArr))


// console.log(wordCount(`I create web experiences that are simple, intuitive, and engaging. Over the past three years, I have focused on frontend development using React﻿, TypeScript﻿, and Next.js﻿. I enjoy working with teams to build projects that combine strong visuals with smooth performance.

// At Supaboard﻿, Bengaluru, I built responsive web apps using React﻿ and TypeScript﻿. I collaborated closely with product managers and designers to launch innovative features. I reduced page load times by 35%, which improved user satisfaction and engagement.

// My career started at Z1 Tech, where I developed video ad features using JavaScript and Video.js﻿. As a Full Stack Developer at Atlantiser﻿, I led the development of an Ethereum﻿ smart contract platform using ReactFlow﻿. This project received 95% positive customer feedback.

// I attend tech meetups and work on personal projects during weekends. These activities keep me updated on emerging technologies and help sharpen my skills.

// If you want to discuss frontend trends or potential collaborations, feel free to reach out. I look forward to connecting.

// Email: shivamgupta130798@gmail.com

// Skills: React, TypeScript, Next.js, JavaScript, Responsive Web Design, Video.js, Ethereum, ReactFlow, REST APIs, Performance Optimization`))

const duplicateRemove = (arr) => {
    let result = new Array()
    let res = new Set(arr)
    for (let i = 0; i < arr.length; i++) {
        res.add(arr[i])
    }
    for (let i = 0; i < res.size; i++) {
        result.push(res[i])
    }
    return result
}

const duplicateRemove2 = (arr) => [...new Set(arr)]

console.log(newArr.length, duplicateRemove2(newArr).length, duplicateRemove(newArr).length, removeDuplicates(newArr).length)