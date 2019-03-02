
new Vue({
    el: '#appTasks',
    data: {
        task:"",
        tasks: []
    },
    //Actions add & remove
    methods: {
        addTask:function(){
            var task = this.task.trim();
            if(task) {
                this.tasks.push({
                    text:task,
                    checked:false
                });
            }
            this.task ="";
            alert("Task added!!!");
            console.log(this.tasks);

        }
    }

});