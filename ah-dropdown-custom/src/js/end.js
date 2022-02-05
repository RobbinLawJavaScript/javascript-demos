//https://www.w3.org/TR/WCAG20-TECHS/SCR19.html
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select

function End() {
  const selects = custom.querySelectorAll("select");
  for (const select of selects) {
    const div = document.createElement("div");
    const header = document.createElement("div");
    const datalist = document.createElement("datalist");
    const optgroups = select.querySelectorAll("optgroup");
    const span = document.createElement("span");
    const options = select.options;
    const parent = select.parentElement;
    const multiple = select.hasAttribute("multiple");
    const onclick = function (e) {
      const disabled = this.hasAttribute("data-disabled");
      select.value = this.dataset.value;
      span.innerText = this.dataset.label;
      if (disabled) return;
      if (multiple) {
        if (e.shiftKey) {
          const checked = this.hasAttribute("data-checked");
          if (checked) {
            this.removeAttribute("data-checked");
          } else {
            this.setAttribute("data-checked", "");
          }
        } else {
          const options = div.querySelectorAll(".option");
          for (i = 0; i < options.length; i++) {
            const option = options[i];
            option.removeAttribute("data-checked");
          }
          this.setAttribute("data-checked", "");
        }
      }
    };
    const onkeyup = function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.keyCode === 13) {
        this.click();
      }
    };
    div.classList.add("select");
    header.classList.add("header");
    div.tabIndex = 1;
    select.tabIndex = -1;
    span.innerText = select.label;
    header.appendChild(span);
    for (const attribute of select.attributes)
      div.dataset[attribute.name] = attribute.value;
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement("div");
      const label = document.createElement("div");
      const o = options[i];
      for (attribute of o.attributes)
        option.dataset[attribute.name] = attribute.value;
      option.classList.add("option");
      label.classList.add("label");
      label.innerText = o.label;
      option.dataset.value = o.value;
      option.dataset.label = o.label;
      option.onclick = onclick;
      option.onkeyup = onkeyup;
      option.tabIndex = i + 1;
      option.appendChild(label);
      datalist.appendChild(option);
    }
    div.appendChild(header);
    for (o of optgroups) {
      const optgroup = document.createElement("div");
      const label = document.createElement("div");
      const options = o.querySelectorAll("option");
      Object.assign(optgroup, o);
      optgroup.classList.add("optgroup");
      label.classList.add("label");
      label.innerText = o.label;
      optgroup.appendChild(label);
      div.appendChild(optgroup);
      for (o of options) {
        const option = document.createElement("div");
        const label = document.createElement("div");
        for (attribute of o.attributes)
          option.dataset[attribute.name] = attribute.value;
        option.classList.add("option");
        label.classList.add("label");
        label.innerText = o.label;
        option.tabIndex = i + 1;
        option.dataset.value = o.value;
        option.dataset.label = o.label;
        option.onclick = onclick;
        option.onkeyup = onkeyup;
        option.tabIndex = i + 1;
        option.appendChild(label);
        optgroup.appendChild(option);
      }
    }
    div.onclick = function (e) {
      e.preventDefault();
    };
    parent.insertBefore(div, select);
    header.appendChild(select);
    div.appendChild(datalist);
    datalist.style.top = header.offsetTop + header.offsetHeight + "px";
    div.onclick = function (e) {
      if (multiple) {
      } else {
        const open = this.hasAttribute("data-open");
        e.stopPropagation();
        if (open) {
          this.removeAttribute("data-open");
        } else {
          this.setAttribute("data-open", "");
        }
      }
    };
    div.onkeyup = function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        this.click();
      }
    };
    document.addEventListener("click", function (e) {
      if (div.hasAttribute("data-open")) div.removeAttribute("data-open");
    });
    const width = Math.max(
      ...Array.from(options).map(function (e) {
        span.innerText = e.label;
        return div.offsetWidth;
      })
    );
    console.log(width);
    div.style.width = width + "px";
  }
  document.forms[0].onsubmit = function (e) {
    const data = new FormData(this);
    e.preventDefault();
    submit.innerText = JSON.stringify([...data.entries()]);
  };
}

export default End;
