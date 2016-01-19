## Formulaires

### Champs
La classe CSS `.form-txt`&nbsp;peut s'appliquer sur les champs texte de type : `text`, `password`, `datetime-local`, `date`, `month`, `time`, `week`, `number`, `email`, `url`, `search`, `tel`, and `color`.

    @example
    <p class="form-item">
      <label for="a0">Champ texte</label>
      <input type="text" class="form-txt" id="a0">
    </p>

    <p class="form-item">
      <label for="a1">Champ texte (placeholder) <span class="form-required" title="Champs obligatoire">*</span></label>
      <input type="text" class="form-txt" id="a1" placeholder="dessine-moi un mouton" required>
    </p>

    <p class="form-item">
      <label for="a2">Champ texte (value) <span class="form-required" title="Champs obligatoire">*</span></label>
      <input type="text" class="form-txt" id="a2" value="je t'ai donné un tout petit mouton" required>
    </p>

    <p class="form-item">
      <label for="a2-2">Champ texte (disabled)</label>
      <input type="text" class="form-txt" id="a2-2" disabled>
    </p>

    <p class="form-item">
      <label for="a2-3">Champ texte (date)</label>
      <input type="date" class="form-txt" id="a2-3">
    </p>

    <p class="form-item">
      <label for="a2-4">Champ texte (time)</label>
      <input type="time" class="form-txt" id="a2-4">
    </p>

    <p class="form-item">
      <label for="a2-5">Champ texte (password)</label>
      <input type="password" class="form-txt" id="a2-5">
    </p>


### Boutons
Boutons de validation d'un formulaire : `<button type="submit">`, `<input type="submit">`.

    @example
    <button type="submit" class="btn-primary">Valider</button>
    <input type="submit" class="btn-primary" value="Valider">

### Champs "Télécharger"

    @example
    <p class="form-item">
      <label for="a6">Un fichier à télécharger</label>
      <input type="file" id="a6">
    </p>


### Textarea

    @example
    <p class="form-item">
      <label for="a5">Votre message</label>
      <textarea id="a5" class="form-txt" row="6"></textarea>
    </p>


### Messages
Styles pour les 3 états suivants : succès, erreur ou avertissement.

    @example
    <p class="form-item has-error">
      <label for="a0-0">Champ texte (error)</label>
      <input type="text" class="form-txt" id="a0-0">
      <span class="form-help">Ici mon message d'erreur</span>
    </p>

    <p class="form-item has-warning">
      <label for="a0-1">Champ texte (warning)</label>
      <input type="text" class="form-txt" id="a0-1">
      <span class="form-help">Ici mon message d'avertissement</span>
    </p>

    <p class="form-item has-success">
      <label for="a0-2">Champ texte (success)</label>
      <input type="text" class="form-txt" id="a0-2">
      <span class="form-help">Ici mon message pour valider</span>
    </p>

### Liste déroulante

    @example
    <div class="form-item">
        <label for="l1">Une liste déroulante</label>
        <select id="l1">
            <option value="">Lundi</option>
            <option value="">Mardi</option>
            <option value="">Mercredi</option>
            <option value="">Jeudi</option>
            <option value="">Vendredi</option>
            <option value="">Samedi</option>
            <option value="">Dimanche</option>
        </select>
     </div>


### Radio & Checkbox

    @example
    <p class="form-item">
      <label for="cb5">
        <input class="form-checkbox" type="checkbox" id="cb5" name="cb" value="1"> 
        Oui je souhaite m'inscrire à la newsletter
      </label>
    </p>
    <p class="form-item">
      <label for="rd6">
        <input class="form-radio" type="radio" id="rd6" name="rd" value="1"> 
        Oui je souhaite m'inscrire à la newsletter
      </label>
    </p>


### Choix multiple
L'élément `<fieldset>`&nbsp;est utilisé pour regroupé plusieurs case à cocher.

    @example
    <fieldset>
        <legend>Un choix multiple avec bouton radio</legend>
        <p class="form-item-radio">
            <input class="form-radio" type="radio" id="br1" name="br" value="1" checked="">
            <label for="br1">Une réponse possible (selected)</label>
        </p>
        <p class="form-item-radio">
            <input class="form-radio" type="radio" id="br2" name="br" value="2">
            <label for="br2">Une réponse possible</label>
        </p>
        <p class="form-item-radio">
            <input class="form-radio" type="radio" id="br3" name="br" value="3" disabled="">
            <label for="br3">Réponse (disabled)</label>
        </p>
    </fieldset>
    <hr>
    <fieldset>
        <legend>Un choix multiple avec checkbox</legend>
        <p class="form-item-checkbox">
            <input class="form-checkbox" type="checkbox" id="cb1" name="cb" value="1" checked="">
            <label for="cb1">Une réponse possible (selected)</label>
        </p>
        <p class="form-item-checkbox">
            <input class="form-checkbox" type="checkbox" id="cb2" name="cb" value="2">
            <label for="cb2">Une réponse possible</label>
        </p>
        <p class="form-item-checkbox">
            <input class="form-checkbox" type="checkbox" id="cb3" name="cb" value="3" disabled="">
            <label for="br3">Réponse (disabled)</label>
        </p>
    </fieldset>