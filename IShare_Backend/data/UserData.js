const User = require("../model/User");
const mongoose  = require("mongoose")
const users = [
    { name: "Alice Johnson", userName: "alice_johnson", email: "alice.johnson@example.com", phoneNumber: 1234567890, password: "password123" },
    { name: "David Lee", userName: "david_lee", email: "david.lee@example.com", phoneNumber: 1234567891, password: "password123" },
    { name: "Maria Garcia", userName: "maria_garcia", email: "maria.garcia@example.com", phoneNumber: 1234567892, password: "password123" },
    { name: "Michael Brown", userName: "michael_brown", email: "michael.brown@example.com", phoneNumber: 1234567893, password: "password123" },
    { name: "Emily Davis", userName: "emily_davis", email: "emily.davis@example.com", phoneNumber: 1234567894, password: "password123" },
    { name: "Sarah Brown", userName: "sarah_brown", email: "sarah.brown@example.com", phoneNumber: 1234567895, password: "password123" },
    { name: "John Smith", userName: "john_smith", email: "john.smith@example.com", phoneNumber: 1234567896, password: "password123" },
    { name: "Olivia Martinez", userName: "olivia_martinez", email: "olivia.martinez@example.com", phoneNumber: 1234567897, password: "password123" },
    { name: "James Garcia", userName: "james_garcia", email: "james.garcia@example.com", phoneNumber: 1234567898, password: "password123" },
    { name: "Emma Wilson", userName: "emma_wilson", email: "emma.wilson@example.com", phoneNumber: 1234567899, password: "password123" },
    { name: "Sophia Taylor", userName: "sophia_taylor", email: "sophia.taylor@example.com", phoneNumber: 1234567800, password: "password123" },
    { name: "Ethan Wilson", userName: "ethan_wilson", email: "ethan.wilson@example.com", phoneNumber: 1234567801, password: "password123" },
    { name: "Lucas Anderson", userName: "lucas_anderson", email: "lucas.anderson@example.com", phoneNumber: 1234567802, password: "password123" },
    { name: "Isabella Johnson", userName: "isabella_johnson", email: "isabella.johnson@example.com", phoneNumber: 1234567803, password: "password123" },
    { name: "Mia Lee", userName: "mia_lee", email: "mia.lee@example.com", phoneNumber: 1234567804, password: "password123" },
    { name: "Charlotte Brown", userName: "charlotte_brown", email: "charlotte.brown@example.com", phoneNumber: 1234567805, password: "password123" },
    { name: "Daniel Wilson", userName: "daniel_wilson", email: "daniel.wilson@example.com", phoneNumber: 1234567806, password: "password123" },
    { name: "Ava Martinez", userName: "ava_martinez", email: "ava.martinez@example.com", phoneNumber: 1234567807, password: "password123" },
    { name: "Mason Taylor", userName: "mason_taylor", email: "mason.taylor@example.com", phoneNumber: 1234567808, password: "password123" },
    { name: "Zoe Smith", userName: "zoe_smith", email: "zoe.smith@example.com", phoneNumber: 1234567809, password: "password123" },
    { name: "Liam Johnson", userName: "liam_johnson", email: "liam.johnson@example.com", phoneNumber: 1234567810, password: "password123" },
    { name: "Ella Davis", userName: "ella_davis", email: "ella.davis@example.com", phoneNumber: 1234567811, password: "password123" },
    { name: "Ethan Brown", userName: "ethan_brown", email: "ethan.brown@example.com", phoneNumber: 1234567812, password: "password123" },
    { name: "Amelia Garcia", userName: "amelia_garcia", email: "amelia.garcia@example.com", phoneNumber: 1234567813, password: "password123" },
    { name: "Oliver White", userName: "oliver_white", email: "oliver.white@example.com", phoneNumber: 1234567814, password: "password123" },
    { name: "Lily Scott", userName: "lily_scott", email: "lily.scott@example.com", phoneNumber: 1234567815, password: "password123" },
    { name: "Benjamin Harris", userName: "benjamin_harris", email: "benjamin.harris@example.com", phoneNumber: 1234567816, password: "password123" },
    { name: "Harper Clark", userName: "harper_clark", email: "harper.clark@example.com", phoneNumber: 1234567817, password: "password123" },
    { name: "Sophia Martinez", userName: "sophia_martinez", email: "sophia.martinez@example.com", phoneNumber: 1234567818, password: "password123" }
];


mongoose.connect('mongodb://localhost:27017/E-Share')
.then(() => {
    console.log('MongoDB connected');
    return User.insertMany(users);
}).then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
}).catch(err => {
    console.error('Error:', err);
});