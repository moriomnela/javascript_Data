const getGradeAndGPA = (mark) => {
    let grade;
    let gpa;
    if (mark >= 0 && mark < 33) {
        grade = "F";
        gpa = 0;
    }
    else if (mark >= 33 && mark < 40) {
        grade = "D";
        gpa = 2;
    }
    else if (mark >= 40 && mark < 50) {
        grade = "C";
        gpa = 2.5;
    }
    else if (mark >= 50 && mark < 60) {
        grade = "B";
        gpa = 3;
    }
    else if (mark >= 60 && mark < 70) {
        grade = "A-";
        gpa = 3.5;
    }
    else if (mark >= 70 && mark < 80) {
        grade = "A";
        gpa = 4;
    }
    else if (mark >= 80 && mark < 100) {
        grade = "A+";
        gpa = 5;
    }
    else {
        grade = "Invalied";
        gpa = "Invalied";
    }
   return{grade,gpa};
};
const resultSystempro = (marks) => {
    const {bangla,english,math,science,reli} = marks;
      
    const totalGpaAvg = 
    (getGradeAndGPA(bangla).gpa + 
    getGradeAndGPA(english).gpa + 
    getGradeAndGPA(math).gpa + 
    getGradeAndGPA(science).gpa + 
    getGradeAndGPA(reli).gpa 
    )/6;

     console.log(totalGpaAvg);

      if(
        bangla >= 33 && 
        english >= 33 && 
        math >= 33 &&
        science >= 33 && 
        reli >= 33
        )
        {
       if(totalGpaAvg >= 0 && totalGpaAvg < 1 ){
         return {
            grade : "F",
            gpa : totalGpaAvg,
         };
       } else if (totalGpaAvg >= 1 && totalGpaAvg < 2) {
        return {
            grade : "D",
            gpa : totalGpaAvg,
         };
       }  else if (totalGpaAvg >= 2 && totalGpaAvg < 3) {
        return {
            grade : "C",
            gpa : totalGpaAvg,
         };

      }  else if (totalGpaAvg >= 3 && totalGpaAvg < 3.5) {
        return {
            grade : "B",
            gpa : totalGpaAvg,
         };
        }
        else if (totalGpaAvg >= 3.5 && totalGpaAvg < 4) {
            return {
                grade : "A-",
                gpa : totalGpaAvg,
             };
            }
         else if (totalGpaAvg >= 4 && totalGpaAvg < 5) {
        return {
            grade : "A",
            gpa : totalGpaAvg,
         };
        }  
        else if (totalGpaAvg >= 5) {
            return {
                grade : "A+",
                gpa : totalGpaAvg,
             };
            } 
      else {
        return {
            grade : "F",
            gpa : 0,
        };
    }
    }
};
