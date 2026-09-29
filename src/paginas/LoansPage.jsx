import LoanTable from "../componentes/emprestimos/LoanTable";

export default function LoansPage({ loans, onReturn }) {
  return (
    <div className="page-content">
      <div className="page-intro">
        <div>
          <span className="eyebrow">CONTROLE DE USO</span>
          <h2>Empréstimos</h2>
          <p>
            Acompanhe os aparelhos que estão atualmente sob sua
            responsabilidade.
          </p>
        </div>
        <div className="catalog-count">
          <strong>{String(loans.length).padStart(2, "0")}</strong>
          <span>empréstimos ativos</span>
        </div>
      </div>
      <LoanTable rows={loans} onReturn={onReturn} />
      <div className="info-strip">
        <span>i</span>
        <p>
          Os empréstimos devem ser devolvidos na mesma sala onde foram
          retirados.
        </p>
      </div>
    </div>
  );
}
