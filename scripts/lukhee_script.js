const internInfo = {
    fullName: "Balogun Lukman",
    hngID: "HNG-01022",
    email: "lukheebalo@gmail.com"
}

const showMyInfo = ({fullName, hngID, email}) => {
    var result = `Hello World, this is ${fullName} with HNGi7 ID ${hngID} using Javascript for stage 2 task and ${email}`
    return (result)
}
    console.log(showMyInfo(internInfo));