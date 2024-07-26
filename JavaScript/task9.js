try {
          let a = 10;
          let b = 0;
          if (b === 0) throw new Error("Division by zero");
          console.log(a / b);
        } catch (error) {
          console.error(error.message);
        } finally {
          console.log("This will run regardless of the error.");
        }




        
        function validateNumber(num) {
          if (typeof num !== 'number') throw new Error("Invalid argument, number expected");
          return num;
        }
        
        try {
          validateNumber("a");
        } catch (error) {
          console.error(error.message);
        }
        