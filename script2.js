const Pesron = ({name, age, job}) =>{
    let _name = name;
    let _age = age;
    let _job = job;

    return{
        getName: () => _name,
        getAge: () => _age,
        getJob: () => _job,

        setJob: newJob => _job = newJob,
    }

    
}