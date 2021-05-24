var app = new Vue({ 
    el: '#app',
    data: {
        A: '',
        A1: '',
        B: '',
        B1: '',        
        C: '',
        C1: '',
        D: '',
        D1: '',
        E: '',
        E1: '',
        North: '',
        East: '',
    },
    methods:
    {
        update: function () {
            this.A1 = this.wordValue(this.A);
            this.B1 = parseInt(this.B);
            this.C1 = this.digitSum(this.C);
            this.D1 = 2 * parseInt(this.D);
            this.E1 = parseInt(this.E)/10;  
            this.North = (this.B1 * (this.D1 - 4) * this.E1) - this.A1 + (this.C1 * 6) + 1;
            this.East = (this.A1 * 3) - (this.B1 * (this.D1 - 3) + this.E1)
        },
        digitSum: function(digits) {
            var z = digits.toString().split(''); 
            var sum = 0;
            for (var i=0; i < z.length; i++)
            {
                if (z[i] >= '0' && z[i] <= '9')
                {
                    sum += z[i] - 0;
                }
            }

            return sum;
        },
        wordValue: function(word) {
            var z = word.toString().toLowerCase().split(''); 
            var sum = 0;
            for (var i=0; i < z.length; i++)
            {
                if (z[i] >= 'a' && z[i] <= 'z')
                {
                    sum += z[i].charCodeAt(0) - 96;
                }
                if (z[i] >= '0' && z[i] <= '9')
                {
                    sum += z[i] - 0;
                }
            }

            return sum;
        },
    }

});