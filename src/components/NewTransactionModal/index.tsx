import Modal from "react-modal";
import { Content, TransactionTypeContainer, RadioBox } from "./style";
import closeImg from "../../assets/close.svg";
import inComeImg from "../../assets/up.svg";
import outComeImg from "../../assets/down.svg";
import { FormEvent, useEffect, useState, useRef } from "react";
import { useTransactions } from "../../hooks/useTransactions";

interface TransactionModalProps {
    ModalIsOpen: boolean;
    onRequestCloseModal: () => void;
}
Modal.setAppElement("#root");

const TransactionModal = ({
    ModalIsOpen,
    onRequestCloseModal,
}: TransactionModalProps) => {

    const { createTransaction } = useTransactions();
    const [error, setError] = useState("");
    const [title, setTitle] = useState("");
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [valueInput, setValueInput] = useState("");
    const errorRef = useRef<HTMLParagraphElement>(null); 

    useEffect(() => {
        if (ModalIsOpen) {
            setCategory("");
            setTitle("");
            setType("");
            setValue(0);
            setValueInput("");
            setError("");
        }
    }, [ModalIsOpen]);

    useEffect(() => {
        throwError()
    }, [error]);

    async function throwError () {
        if (error && errorRef.current) {
            const el = errorRef.current;
            el.classList.add("shake");

            const timeout = setTimeout(() => {
                el.classList.remove("shake");
            }, 50);

            return () => clearTimeout(timeout);
        }
    }

    async function handleCreateNewTransaction(e: FormEvent) {
        e.preventDefault();

        if (!title) {
            setError("Por favor, informe um título para a transação.");
            throwError()
            return;
        }
        if (!value) {
            setError("Informe um valor válido maior que zero.");
            throwError()
            return;
        }
        if (!type) {
            setError("Escolha se a transação é uma entrada ou uma saída.");
            throwError()
            return;
        }

        setError('')

        await createTransaction({
            title,
            amount: value,
            category,
            type,
        });

        setCategory("");
        setTitle("");
        setType("");
        setValue(0);
        onRequestCloseModal();
    }

    function formatCurrency(value: string) {
        const numericValue = value.replace(/\D/g, "");
        const parsed = parseFloat(numericValue) / 100;

        if (isNaN(parsed)) return "";

        return parsed.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }

    function handleValueChange(e: React.ChangeEvent<HTMLInputElement>) {
        const rawValue = e.target.value;
        const formatted = formatCurrency(rawValue);
        setValueInput(formatted);

        const numeric = Number(rawValue.replace(/\D/g, "")) / 100;
        setValue(numeric);
    }

    return (
        <Modal
            isOpen={ModalIsOpen}
            onRequestClose={onRequestCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Content>
                <button
                    type="button"
                    onClick={onRequestCloseModal}
                    className="react-modal-close"
                >
                    <img src={closeImg} alt="Fechar" />
                </button>
                <h2>Cadastrar Transação</h2>
                <form onSubmit={handleCreateNewTransaction}>
                    <label htmlFor="title">
                        Título
                        <input
                            type="text"
                            placeholder="Título"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>

                    <label htmlFor="value">
                        {" "}
                        Valor
                        <input
                            type="text"
                            name="value"
                            placeholder="R$ 0,00"
                            value={valueInput}
                            onChange={handleValueChange}
                        />
                    </label>

                    <TransactionTypeContainer>
                        <RadioBox
                            type="button"
                            onClick={() => {
                                setType("income");
                            }}
                            isActive={type === "income"} //boolean
                            activeColor="green"
                        >
                            <img src={inComeImg} />
                            <span>Entrada</span>
                        </RadioBox>
                        <RadioBox
                            type="button"
                            onClick={() => {
                                setType("expense");
                            }}
                            isActive={type === "expense"}
                            activeColor="red"
                        >
                            <img src={outComeImg} />
                            <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>

                    <label htmlFor="category">
                        {" "}
                        Categoria
                        <input
                            type="text"
                            placeholder="Categoria"
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </label>
                    {error && <p ref={errorRef}>{error}</p>}
                    <button type="submit">Cadastrar</button>
                </form>
            </Content>
        </Modal>
    );
};

export default TransactionModal;
