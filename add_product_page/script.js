document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const brandName = document.getElementById("brandName").value;
    const genericName = document.getElementById("genericName").value;
    const mfgDate = document.getElementById("mfgDate").value;
    const expDate = document.getElementById("expDate").value;
    const rate = document.getElementById("rate").value;
    const mrp = document.getElementById("mrp").value;
    const batchNumber = document.getElementById("batchNumber").value;
  
    alert(`Product Added Successfully!
  Brand Name: ${brandName}
  Generic Name: ${genericName}
  Mfg Date: ${mfgDate}
  Exp Date: ${expDate}
  Rate: ${rate}
  MRP: ${mrp}
  Batch Number: ${batchNumber}`);
    
    // Reset form
    document.getElementById("productForm").reset();
  });
  