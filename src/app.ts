import {connect} from './mongoConnect'
import { UserRepository } from './repositories/UserRepository';

async function main() {
    try {

        
        const uri = 'mongodb://localhost:27017';
        await connect(uri); 

        const userRepository = new UserRepository();

        //create-user
        const user = await userRepository.createAsync({
            userId: 'tensech1',
            email: 'tensech1@gmail.com'
        })
        console.log(user);

        //create-user2
        const user2 = await userRepository.createAsync({
            userId: 'tensech2',
            email: 'tensech2@gmail.com'
        })
        console.log(user2);

        // //getUser by Id
        // const user3 = await userRepository.findByIdAsync("653a0cdffb2e4a89f699ae80")
        // console.log(user3);

        // // update User by Id
        // const user4 = await userRepository.updateAsync("653a0ce1fb2e4a89f699ae82",{
        //     userId: 'ten2sech',
        //     email: 'ten2sech@gmail.com'
        // })
        // console.log(user4);

        // //retrive all user
        // const user5 = await userRepository.findAllAsync()
        // console.log(user5);

        // //delete user 
        // const user6 = await userRepository.deleteAsync("653a0bcc1b4b4e1eeb9b877a");
        // console.log(user6);


    } catch (error) {
        console.log("error: ",error);
    }
}

main();