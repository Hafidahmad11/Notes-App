class CustomNoteContainer extends HTMLElement {
  constructor() {
    super();
  }

  openAddNoteModal() {
    const modalBg = document.getElementById("modalBg");
    modalBg.style.display = "block";
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="wrapper">
        <article class="container bg-white shadow add-note-card" id="add-note-card">
          <h2 class="container-header">Tambah Catatan Baru</h2>
          <i class="fas fa-plus-circle fa-4x add-note-icon" id="addButton"></i>
        </article>
        <div class="modal-bg" id="modalBg">
          <div class="modal-content">
            <span class="close-button" id="closeButton">&times;</span>
            <h2 id="modalTitle">Tambah Catatan Baru</h2>
            <form id="noteForm">
              <div class="form-group">
                <label for="title">Judul:</label>
                <input type="text" id="title" name="title">
                <p id="titleErrorMessage" class="error-message"></p>
              </div>
              <div class="form-group">
                <label for="description">Deskripsi:</label>
                <textarea id="description" name="description"></textarea>
                <p id="descriptionErrorMessage" class="error-message"></p> 
              </div>
              <button type="submit" class="btn-submit">Tambahkan</button>
            </form>
          </div>
        </div>  
        <article class="container bg-white shadow" id="search-note">
          <h2 class="container-header">Cari Catatan</h2>
          <div class="input-group">
            <input type="text" id="searchInput" placeholder="Cari catatan..." />
            <i class="fas fa-search search-icon"></i>
          </div>
        </article>
        <article class="container">
          <h2 class="container-header">Catatan</h2>
          <div class="notes" id="notesList"></div>
        </article>
      </section>
    `;
  }
}

customElements.define("custom-note-container", CustomNoteContainer);
