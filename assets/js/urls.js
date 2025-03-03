const urls = [
        "https://campus.uoc.edu/estudiant/tramits/ca/index_estudiant.html",
        "https://campus.uoc.edu/webapps/campus/estudiant/estudiant/incorporacio/es/index_TO.html",
        "https://campus.uoc.edu/webapps/campus/estudiant/estudiant/incorporacio/es/index_DT.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/documentacio/grau/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/documentacio/formaciopermanent/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/documentacio/doctorat/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/documentacio/altres/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/matricula_grau/index_uoc.html",
        "https://campus.uoc.edu/estudiant/tramits/es/matricula/matricula_grau/index_incorporacio.html",
        "https://campus.uoc.edu/estudiant/tramits/es/matricula/matricula_doctorat/index_incorporacio.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/matricula_postgrau/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/matricula_doctorat/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/matricula_altres/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/modificacio_grau/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/modificacio_altres/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/modificacio_doctorat/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/anulacio/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/anulacio_altres/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/preus_grau/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/preus_postgrau/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/preus_doctorat/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/formes_pagament/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/factura/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/recursos/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/beques/Ministeri/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/beques/equitat/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/beques/doctorat/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/descomptes/ajuts_atur/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/beques/erasmus_formacio/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/beques/erasmus_practiques/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/beques/refugees/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/beques/collaboracio/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/beques/randstad/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/descomptes/alumni/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/descomptes/familia_nombrosa/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/descomptes/discapacitats_terrorisme_genere/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/descomptes/violencia_masclista/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/descomptes/matricula_honor/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/descomptes/comunitat_uoc/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/descomptes/conveni_empreses/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/descomptes/ampliacio_matricula/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/mobilitats/deakin/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/mobilitats/ucp/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/mobilitats/pame/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/mobilitats/cinda/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/mobilitats/unad/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/estudis_previs/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/experiencia_professional/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/traspas_MU/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/avaluacio/proves_virtuals/index_covid.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/avaluacio/encavalcaments/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/avaluacio/comprovant/index_covid.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/avaluacio/revisio/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/avaluacio/discapacitat/index_covid.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/avaluacio/dret_examen/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/avaluacio/compensacio/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/avaluacio/com_funcionen_PV/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/avaluacio/publicacio_notes/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/avaluacio/sistema_avaluacio/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/avaluacio/sistema_qualificacions/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/titol/oficials/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/titol/propis/index.html",
        "https://campus.uoc.edu/webapps/campus/estudiant/estudiant/tramits/ca/certificats/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/certificats/nou_certificat/meus_certificats.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/legalitzacio_documents/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/titol/sistema_universitari/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/titol/com_son/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/certificats/seu_electronica/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/practiques/practiques_curriculars/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/documentacio/grau/paisos_especials.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/matricula_grau/minors/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/matricula_grau/dret_examen/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/matricula_postgrau/competencias_TIC/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/matricula_postgrau/seleccio_optatives/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/matricula/enviament/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/beques/Ministeri/exempcio_uoc.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/estudis_previs/estudis_convalidables/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/estudis_previs/estudis_convalidables/angles.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/estudis_previs/estudis_convalidables/frances.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/estudis_previs/estudis_convalidables/alemany.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/estudis_previs/estudis_convalidables/recaau.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/estudis_previs/introduir_estudis/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/estudis_previs/documentacio/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/estudis_previs/pagament/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/estudis_previs/resultat/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/experiencia_professional/taules/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/convalidacions/experiencia_professional/coetic/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/practiques/practiques_curriculars/GR01.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/practiques/practiques_curriculars/convenis_ccaa/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/treballs_finals/GR01.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/adaptacio_plans/minors/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/adaptacio_plans/minors/minors_generics.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/adaptacio_plans/minors/dret.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/adaptacio_plans/minors/humanitats.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/adaptacio_plans/minors/llengua.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/adaptacio_plans/minors/psicologia.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/adaptacio_plans/minors/informatica.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/doctorat/projecte_tesi/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/doctorat/diposit_tesi/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/doctorat/lectura_tesi/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/doctorat/prorroga/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/acces_estudis/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/adapatacio_necessitats/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/nivell_b2/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/proves_25/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/recon_doble_titulacio/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/adaptacio_plans/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/autoritzacions/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/canvi_idioma/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/canvi_professor/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/canvi_programa/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/doble_titulacioUDA/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/trasllat_expedient/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/solicitud_itinerari/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/solicitud_tutor/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/baixa_doctorat/index.html",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/canvi_programa_doctorat/",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/dedicacio_doctorat/",
        "https://campus.uoc.edu/estudiant/tramits/ca/altres_tramits/certificats_catala/index.html",
        "https://campus.uoc.edu/estudiant/espai-personal/ca/index_estudiant.html",
        "https://campus.uoc.edu/estudiant/espai-personal/ca/meus_pagaments/meus_pagaments.html",
        "https://campus.uoc.edu/estudiant/espai-personal/ca/meus_pagaments/dades_bancaries.html",
        "https://campus.uoc.edu/estudiant/espai-personal/ca/carnet/index.html",
        "https://campus.uoc.edu/estudiant/espai-personal/ca/meus_materials/meus_materials.html",
        "https://campus.uoc.edu/estudiant/servei_atencio/ca/index.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/index_estudiant.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/universitat/igualtat/index.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/actualitat/noticies/blocs.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/universitat/cooperacio/index.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/universitat/plans/index.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/participa/voluntariat/voluntaris.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/participa/representants/index.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/participa/esports/index.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/participa/associacions/index.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/recursos/recursos_linguistics/index.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/recursos/diversitat_funcional/index.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/recursos/llicencia_office/office.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/recursos/gsuite_seguretat/index.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/recursos/plantilles_marca/index.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/universitat/plans/GR01/index.html",
        "https://campus.uoc.edu/estudiant/mes-uoc/ca/universitat/plans/Curs25/index.html",
    ];
