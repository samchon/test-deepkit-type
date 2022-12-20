import { is } from "@deepkit/type";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TupleRestAtomic = _test_deepkit_is(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => is<TupleRestAtomic>(input),
    TupleRestAtomic.SPOILERS,
);