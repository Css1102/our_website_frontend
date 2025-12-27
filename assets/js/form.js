const form=document.getElementById('userForm')
form.addEventListener('submit',async(e)=>{
e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      const res = await fetch('https://our-website-backend-i1ht.onrender.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      console.log(result.message)
      alert(result.message);
    });