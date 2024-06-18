function login(username: string): string {
    // console.log(username);
    const user = {
        name: 'pradip',
    };
    const name = user['name'];

    return username + name;
}
login('pradip');
