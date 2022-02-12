module.exports = { 
       threeSumClosest : function(A, B){
        let sum = 0;
        for(let x = 0; x < A.length ; x++)
        {
            for(let y =x + 1; y < A.length; y++)
            {
                for(let z =y + 1; z < A.length; z++)
                {
                    if (Math.abs(B - sum) >
                        Math.abs(B - (A[x] + A[y] + A[z])))
                        sum = (A[x] + A[y] + A[z]);
                }
            }
        }
        return sum;
       }
   };