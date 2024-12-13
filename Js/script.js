let age = prompt('Tomar Boyos Kotoo Baba?')

let Business = document.getElementById('Business')

let Job = document.getElementById('Job')


if(age > 30){

    alert('Ok Thik asa')
    let Job = prompt('Ki kaj koro tume?')

    if( Job === 'Business' ){

        alert('Accha onak valo')
    }
    else{

        alert('Sorry Baba Amar Meyar Jonno ame akjon Business Man Khujtase Jara Jobholder tader sata ame Amr Meya Biya Debo Na.')
    }

    let income = prompt ('Monthly koto profit hoy tomer?')

    if( income < 30000){

        alert('Na baba amar Meyer j khoroch ta tomar ay income a hoba na ti ame tomar sata amr meyar biya debo na Sorry Baba tume bari chola jao.')
    }

    else{

        alert(' Thik asa ame raji Tume tomar ma baba k asta bolo.')
    }
    
}
else{

    alert('Aga Prapto Boyosko how baba tarpora Biya koro')
}