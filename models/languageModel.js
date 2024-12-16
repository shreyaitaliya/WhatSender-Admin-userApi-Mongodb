// superAdminModel.js
const mongoose = require('mongoose');

const LanguageSchema = mongoose.Schema({
    language: {
        type: String,
        required: true,
    },
    languageName: {
        type: String,
        required: true,
    },
});

const Language = mongoose.model('Language', LanguageSchema);

const defaultData = [
    { "language": "Albanian", "languageName": "Albania" },
    { "language": "Arabic", "languageName": "Arab World" },
    { "language": "Armenian", "languageName": "Armenia" },
    { "language": "Awadhi", "languageName": "India" },
    { "language": "Azerbaijani", "languageName": "Azerbaijan" },
    { "language": "Bashkir", "languageName": "Russia" },
    { "language": "Basque", "languageName": "Spain" },
    { "language": "Belarusian", "languageName": "Belarus" },
    { "language": "Bengali", "languageName": "Bangladesh" },
    { "language": "Bhojpuri", "languageName": "India" },
    { "language": "Bosnian", "languageName": "Bosnia and Herzegovina" },
    { "language": "Brazilian Portuguese", "languageName": "Brazil" },
    { "language": "Bulgarian", "languageName": "Bulgaria" },
    { "language": "Cantonese (Yue)", "languageName": "China" },
    { "language": "Catalan", "languageName": "Spain" },
    { "language": "Chhattisgarhi", "languageName": "India" },
    { "language": "Chinese", "languageName": "China" },
    { "language": "Croatian", "languageName": "Croatia" },
    { "language": "Czech", "languageName": "Czech Republic" },
    { "language": "Danish", "languageName": "Denmark" },
    { "language": "Dogri", "languageName": "India" },
    { "language": "Dutch", "languageName": "Netherlands" },
    { "language": "English", "languageName": "United Kingdom" },
    { "language": "Estonian", "languageName": "Estonia" },
    { "language": "Faroese", "languageName": "Faroe Islands" },
    { "language": "Finnish", "languageName": "Finland" },
    { "language": "French", "languageName": "France" },
    { "language": "Galician", "languageName": "Spain" },
    { "language": "Georgian", "languageName": "Georgia" },
    { "language": "German", "languageName": "Germany" },
    { "language": "Greek", "languageName": "Greece" },
    { "language": "Gujarati", "languageName": "India" },
    { "language": "Haryanvi", "languageName": "India" },
    { "language": "Hindi", "languageName": "India" },
    { "language": "Hungarian", "languageName": "Hungary" },
    { "language": "Indonesian", "languageName": "Indonesia" },
    { "language": "Irish", "languageName": "Ireland" },
    { "language": "Italian", "languageName": "Italy" },
    { "language": "Japanese", "languageName": "Japan" },
    { "language": "Javanese", "languageName": "Indonesia" },
    { "language": "Kannada", "languageName": "India" },
    { "language": "Kashmiri", "languageName": "India" },
    { "language": "Kazakh", "languageName": "Kazakhstan" },
    { "language": "Konkani", "languageName": "India" },
    { "language": "Korean", "languageName": "South Korea" },
    { "language": "Kyrgyz", "languageName": "Kyrgyzstan" },
    { "language": "Latvian", "languageName": "Latvia" },
    { "language": "Lithuanian", "languageName": "Lithuania" },
    { "language": "Macedonian", "languageName": "North Macedonia" },
    { "language": "Maithili", "languageName": "India" },
    { "language": "Malay", "languageName": "Malaysia" },
    { "language": "Maltese", "languageName": "Malta" },
    { "language": "Mandarin", "languageName": "China" },
    { "language": "Mandarin Chinese", "languageName": "China" },
    { "language": "Marathi", "languageName": "India" },
    { "language": "Marwari", "languageName": "India" },
    { "language": "Min Nan", "languageName": "China" },
    { "language": "Moldovan", "languageName": "Moldova" },
    { "language": "Mongolian", "languageName": "Mongolia" },
    { "language": "Montenegrin", "languageName": "Montenegro" },
    { "language": "Nepali", "languageName": "Nepal" },
    { "language": "Norwegian", "languageName": "Norway" },
    { "language": "Oriya", "languageName": "India" },
    { "language": "Pashto", "languageName": "Afghanistan" },
    { "language": "Persian (Farsi)", "languageName": "Iran" },
    { "language": "Polish", "languageName": "Poland" },
    { "language": "Portuguese", "languageName": "Portugal" },
    { "language": "Punjabi", "languageName": "India" },
    { "language": "Rajasthani", "languageName": "India" },
    { "language": "Romanian", "languageName": "Romania" },
    { "language": "Russian", "languageName": "Russia" },
    { "language": "Sanskrit", "languageName": "India" },
    { "language": "Santali", "languageName": "India" },
    { "language": "Serbian", "languageName": "Serbia" },
    { "language": "Sindhi", "languageName": "Pakistan" },
    { "language": "Sinhala", "languageName": "Sri Lanka" },
    { "language": "Slovak", "languageName": "Slovakia" },
    { "language": "Slovene", "languageName": "Slovenia" },
    { "language": "Slovenian", "languageName": "Slovenia" },
    { "language": "Ukrainian", "languageName": "Ukraine" },
    { "language": "Urdu", "languageName": "Pakistan" },
    { "language": "Uzbek", "languageName": "Uzbekistan" },
    { "language": "Vietnamese", "languageName": "Vietnam" },
    { "language": "Welsh", "languageName": "Wales" },
    { "language": "Wu", "languageName": "China" }
]

// Function to insert data if it doesn't already exist
async function insertDefaultlanguage() {
    try {
        const count = await Language.countDocuments();
        if (count === 0) {
            await Language.create(defaultData);
            console.log('Default data inserted successfully.');
        } else {
            console.log('Data already exists, skipping insertion.');
        }
    } catch (error) {
        console.error('Error inserting default data:', error);
    }
}

module.exports = { Language, insertDefaultlanguage };